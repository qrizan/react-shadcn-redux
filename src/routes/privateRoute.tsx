import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import type { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
}

interface IUserCookies {
  avatar?: string,
  email?: string,
  username?: string,
  role?:string,
}

const privateRoutes: FC<Props> = ({children}:Props) => {

    const token = Cookies.get('token');
    const userCookies = Cookies.get("user")
    const user: IUserCookies = (userCookies) ? JSON.parse(userCookies) : null;    

    if (!token || user.role !== 'ADMINISTRATOR') {
        return <Navigate to="/" replace />;
    }

    return children;

}

export default privateRoutes;