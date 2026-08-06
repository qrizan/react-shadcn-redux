#!/bin/sh
# nginx menjalankan setiap *.sh di /docker-entrypoint.d/ sebelum start.
# Menulis config.js di sini, bukan saat build, supaya API_URL dibaca dari
# environment container, dan image yang sama dipakai di semua environment.
set -eu

CONFIG_FILE=/usr/share/nginx/html/config.js
ESCAPED_API_URL=$(printf '%s' "${API_URL:-}" | sed 's/"/\\"/g')

cat > "$CONFIG_FILE" <<EOF
window.__APP_CONFIG__ = {
  apiUrl: "${ESCAPED_API_URL}"
};
EOF
