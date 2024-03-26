import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { CopyIcon, DotsHorizontalIcon, EyeOpenIcon } from "@radix-ui/react-icons"
import { UserViewDetail } from "../detail/user-view-detail";

import { IUsers } from "@/dtos/users.dto";

interface ITableActionProps {
  data: IUsers;
}

export const TableAction: React.FC<ITableActionProps> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(data.id)}
          >
            <CopyIcon className="mr-2" /> Copy ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleOpen()}>
            <EyeOpenIcon className="mr-2" /> View
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <UserViewDetail open={open} userDetail={data} setClose={() => setOpen(false)} />
    </>
  )
}