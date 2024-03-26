"use client"

import * as React from "react"
import { useState } from "react";
import { cn } from "@/lib/utils"
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Icons } from "../icons"
import { toast } from "../ui/use-toast";
import api from "@/api/api";
// import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface IUserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: IUserAuthFormProps) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [errors, setErrors] = useState([]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  interface IResponse { 
    data: { 
      accessToken: string; 
      user: object; 
      message: string; 
    } 
  }

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    await api.post('/auth/login', {
      email: email,
      password: password
    })
    .then((response: IResponse) => {

      Cookies.set('token', response.data.accessToken, { secure: true, sameSite: "strict" });
      Cookies.set('user', JSON.stringify(response.data.user), { secure: true, sameSite: "strict" });

      toast({
        description: response.data.message,
      })

      setIsLoading(false)
      navigate("/dashboard");

    })
    .catch((error: { response: { data: React.SetStateAction<never[]>; }; }) => {
      setIsLoading(false)
      setErrors(error.response.data);
    })

  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-1 mt-3">
            <Label htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              autoCorrect="off"
              autoComplete="off"
              disabled={isLoading}
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* {
            errors && errors.message.map( (error: string) => (
              <div className="flex items-center text-sm"><ExclamationTriangleIcon className="mr-2"/> {error}</div>
            ))
          } */}
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}