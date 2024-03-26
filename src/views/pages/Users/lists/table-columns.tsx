import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";

import { Badge } from "@/components/ui/badge";
import { TableAction } from "./table-actions";

import { IUsers } from "@/dtos/users.dto";

export const columns: ColumnDef<IUsers>[] = [
  {
    accessorKey: "username",
    header: () => <div className="text-left ml-2">Username</div>,
    cell: ({ row }) => {
      return <div className="w-[150px] truncate font-medium ml-2">{row.getValue("username")}</div>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const label = row.original.role;

      return <>{label && <Badge variant="secondary">{label}</Badge>}</>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      return dayjs(row.original.createdAt).format("DD MMMM YYYY HH:MM");
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => {
      return dayjs(row.original.updatedAt).format("DD MMMM YYYY HH:MM");
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <TableAction data={row.original} />,
  },
];
