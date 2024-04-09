## Games Catalog

#### built with

| Tools  |  |
| :--- | :--- |
| React  | https://react.dev  |
| Redux | https://redux.js.org  |
| Shadcn UI | https://ui.shadcn.com |
| etc |  |

#### API

https://github.com/qrizan/nestjs-swagger-prisma

#### api configuration .env
```
copy .env.example .env
```
example
```
VITE_API_URL=http://localhost:3000
```

#### store folder structure 

```
...
├── src
│   ├── api
│   ├── dtos
│   ├── services
│   ├── store
│   │   ├── actions
│   │   ├── reducers
│   │   ├── sagas
│   │   ├── selectors
│   │   ├── store.ts
│   │   └── types
│   ├── views
...
```
#### running
```
cd react-shadcn-redux
pnpm install
pnpm dev
```
#### screenshots

![dashboard](screenshots/dashboard.png)

![genre](screenshots/genre.png)

![edit-game-post](screenshots/edit-game-post.png)

![user-list](screenshots/user-list.png)

#### state preview ( redux dev tools )

![redux-tool](screenshots/redux-tool.png)
  