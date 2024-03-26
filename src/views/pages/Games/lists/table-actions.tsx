import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { 
  CopyIcon, 
  DotsHorizontalIcon, 
  Pencil2Icon, 
  TrashIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { DeleteAlertDialog } from "@/components/delete-alert-dialog"

import { deleteGameRequest } from '@/store/actions/games/deleteGame';
import { IGames } from "@/dtos/games.dto";

interface TableActionProps {
  data: IGames;
}

export const TableAction: React.FC<TableActionProps> = (props) => {
  const { data } = props;
  
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const onConfirm = async () => {
    dispatch(deleteGameRequest(data.id));
    setOpen(false)
  };

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
          <Link to={`/game/edit/${data.id}`}>
            <DropdownMenuItem>
              <Pencil2Icon className="mr-2" />  Edit
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={handleOpen}>
            <TrashIcon className="mr-2" />Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteAlertDialog open={open} onConfirm={onConfirm} setClose={() => setOpen(false)} />
    </>
  )
}