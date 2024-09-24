import { ServiceCell } from "@/components/(admin)/users/table/service-cell";
import { serviceFilterFn } from "@/components/(admin)/users/utils/service-filter-fn";
import { WebAppUser } from "@/models/web-app-user";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import React from "react";

export default function useColumns() {
  const columns = React.useMemo<ColumnDef<WebAppUser>[]>(
    () => [
      {
        header: () => <span>EMAIL</span>,
        accessorFn: (row) => row.email,
        id: "email",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: () => <span>클릭소프트 ID</span>,
        accessorFn: (row) => row.csUserId,
        id: "csUserId",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: () => <span>이름</span>,
        accessorFn: (row) => row.name,
        id: "name",
        footer: (props) => props.column.id,
      },
    ],
    [],
  );

  return { columns };
}
