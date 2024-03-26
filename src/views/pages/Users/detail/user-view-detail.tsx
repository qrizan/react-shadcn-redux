import dayjs from "dayjs"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { IUsers } from "@/dtos/users.dto"
import { Separator } from "@/components/ui/separator"

export interface IUserViewDetailProps {
  open: boolean,
  userDetail: IUsers,
  setClose: () => void,
}
export function UserViewDetail(props: IUserViewDetailProps) {
  const { open, setClose, userDetail } = props
  const baseUrl = import.meta.env.VITE_API_URL

  return (
    <Dialog open={open} onOpenChange={setClose}>
      <DialogContent className="sm:max-w-md" >
        
          <div className="space-y-1 space-x-2 flex">
            <Avatar className="h-14 w-14 mr-4">
              <AvatarImage
                src={`${baseUrl}${userDetail?.avatar ?? ""}`}
                alt={userDetail?.username ?? ""}
              />
              <AvatarFallback>{userDetail?.username?.[0]}</AvatarFallback>
            </Avatar>
            <span className="items-center">
              <span className="text-sm font-medium leading-none">{userDetail.username} | {userDetail.role}</span>
              <br />
              <span className="text-sm text-muted-foreground">
                {userDetail.email}
              </span>
            </span>
          </div>

          <Separator className="my-2" />
          
          <div className="flex h-5 items-center justify-center space-x-4 text-sm">
            <span>Created At: {dayjs(userDetail.createdAt).format('DD MMMM YYYY')}</span>
            <Separator orientation="vertical" />
            <span>Updated At: {dayjs(userDetail.updatedAt).format('DD MMMM YYYY')}</span>
          </div>

      </DialogContent>
    </Dialog>

  )
}

