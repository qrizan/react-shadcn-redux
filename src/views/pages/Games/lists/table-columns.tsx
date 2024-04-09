import { ColumnDef, } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { IGames } from "@/dtos/games.dto";
import { TableAction } from "./table-actions"

export const columns: ColumnDef<IGames>[] = [
  {
    accessorKey: "title",
    header: () => <div className="text-left ml-2">Title</div>,
    cell: ({ row }) => {
      return (
        <div className="w-[350px] truncate font-medium ml-2">
            {row.getValue("title")}
        </div>
      )
    },
  },
  {
    accessorKey: "genre",
    header: "Genre",
    cell: ({ row }) => {
      return (
        <Badge variant="secondary">{row.original.genre.name}</Badge>
      )
    },
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      return (
        <>{row.original.user.username}</>
      )
    },
  },
  {
    accessorKey: "bookmarkedBy",
    header: () => <div className="text-right">Bookmarked By</div>,
    cell: ({ row }) => {
      return (
        <div className="font-medium text-right">
          {row.getValue("bookmarkedBy")} Users
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <TableAction data={row.original} />,
  }
]