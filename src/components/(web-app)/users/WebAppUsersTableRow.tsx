import { WebAppUser } from "@/models/web-app-user";
import { useDisclosure } from "@nextui-org/react";
import { Row, flexRender } from "@tanstack/react-table";
import { WebAppUserSettingsDialog } from "./WebAppUserSettingsDialog";

interface Props {
  row: Row<WebAppUser>;
}
export const WebAppUsersTableRow = ({ row }: Props) => {
  const disclosure = useDisclosure();

  return (
    <>
      <WebAppUserSettingsDialog user={row.original} {...disclosure} />
      <tr
        key={row.id}
        className="hover:cursor-pointer hover:bg-blue-50"
        onClick={disclosure.onOpen}
      >
        {row.getVisibleCells().map((cell) => {
          return (
            <td key={cell.id} className="p-1 px-4">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          );
        })}
      </tr>
    </>
  );
};
