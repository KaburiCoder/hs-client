import { Button, useDisclosure } from "@nextui-org/react";
import { LabeldItem } from "../UserSettingsDialog";
import { RegistMapDialog } from "..";

export const RegistMapButton = () => {
  const disclosure = useDisclosure();

  return (
    <LabeldItem label="위치등록">
      <Button onClick={disclosure.onOpen}>지도열기</Button>
      <RegistMapDialog {...disclosure} />
    </LabeldItem>
  );
};
