# syntax=docker/dockerfile:1
#
# Base image dipin ke digest agar build reproducible.

FROM node:22-bookworm-slim@sha256:d649c27dae7ba0137b3cef5dd75baa422c08dc3d9e3fc0c23dfb172dc3cc6436 AS builder

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
WORKDIR /app
RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN --mount=type=cache,target=/root/.cache/node/corepack \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

COPY . .
RUN pnpm build


FROM nginxinc/nginx-unprivileged:1.27-alpine@sha256:65e3e85dbaed8ba248841d9d58a899b6197106c23cb0ff1a132b7bfe0547e4c0 AS runtime

# Base image belum dibangun ulang sejak advisory Alpine terbaru; tarik
# paket OS yang sudah dipatch di dalam branch Alpine yang sama.
USER root
RUN apk update && apk upgrade --no-cache
USER 101

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=101:101 docker/40-write-app-config.sh /docker-entrypoint.d/40-write-app-config.sh
RUN chmod +x /docker-entrypoint.d/40-write-app-config.sh

# chown ke user nginx (101) supaya entrypoint bisa menulis config.js di sini
# saat container start.
COPY --from=builder --chown=101:101 /app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1
