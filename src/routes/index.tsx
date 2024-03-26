import { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./privateRoute";

const Loader = lazy(() => import('@/components/loader'))
const Login = lazy(() => import('@/views/auth/Login'));

const Dashboard = lazy(() => import('@/views/pages/Dashboard'));

const Games = lazy(() => import('@/views/pages/Games/lists'));
const GameNew = lazy(() => import('@/views/pages/Games/new'));
const GameEdit = lazy(() => import('@/views/pages/Games/edit'));

const Users = lazy(() => import('@/views/pages/Users/lists'));

const Forbidden = lazy(() => import('@/views/pages/forbidden'));

export default function RoutesIndex() {

  const routes = [
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      private: true
    },
    {
      path: "/games",
      element: <Games />,
      private: true
    },
    {
      path: "/game/new",
      element: <GameNew />,
      private: true
    },
    {
      path: "/game/edit/:id",
      element: <GameEdit />,
      private: true
    },
    {
      path: "/users",
      element: <Users />,
      private: true
    },
    {
      path: "/forbidden",
      element: <Forbidden />,
      private: true
    }
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <Suspense fallback={<Loader />}>
              {route.private ? <PrivateRoutes>{route.element}</PrivateRoutes> : route.element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  )
}