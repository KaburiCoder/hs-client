"use client";
import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import { useTablePagination } from "@/lib/hooks/use-table-pagination";
import { apiPaths } from "@/paths";
import { getUsersByHsUserId } from "@/services/users/get-users-by-hsuserid";
import { useQuery } from "@tanstack/react-query";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import useColumns from "./hooks/use-columns";
import WebAppUsersTableEl from "./WebUsersTableEl";

export default function WebAppUsersTable() {
  const { user } = useServerCookie();
  const { data } = useQuery({
    queryKey: [apiPaths.webApp.hsUserId(user?.userId ?? "")],
    queryFn: () => getUsersByHsUserId({ hsUserId: user?.userId ?? "" }),
    enabled: !!user,
  });
  const newData = useMemo(() => data ?? [], [data]);

  const { pagination, setPagination, TablePagination } = useTablePagination();
  const { columns } = useColumns();
  const table = useReactTable({
    columns,
    data: newData,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: { pagination },
  });

  return (
    <div className="flex w-fit flex-col justify-between">
      <WebAppUsersTableEl table={table} />
      <TablePagination className="rounded-lg bg-slate-200 p-2" table={table} />
    </div>
  );
}
