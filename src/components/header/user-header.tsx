import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { logoutRequest } from '@/store/actions/authAction'; 

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch } from "react-redux";

interface IUserCookies {
  avatar?: string,
  email?: string,
  username?: string,
  role?:string,
}

export function UserHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userCookies = Cookies.get("user")
  const user: IUserCookies = (userCookies) ? JSON.parse(userCookies) : null;

    const signOut = () => {
      dispatch(logoutRequest()); 
      Cookies.remove("user");
      Cookies.remove("token");

      navigate("/");
    }
    const baseUrl = import.meta.env.VITE_API_URL

    const userLogin = {
      image: `${baseUrl}${user?.avatar}`,
      name: user?.username,
      email: user?.email
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={userLogin?.image ?? ""}
                alt={userLogin?.name ?? ""}
              />
              <AvatarFallback>{userLogin?.name?.[0]}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {userLogin?.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {userLogin?.email}
              </p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>
            Log out
            <DropdownMenuShortcut></DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

}