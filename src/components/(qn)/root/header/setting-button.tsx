import { Button, useDisclosure } from "@nextui-org/react";
import { Settings } from "lucide-react";
import React from "react";
import SettingModal from "./setting-modal";

export default function SettingButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function handleOpenSettings(): void {
    onOpen();
  }

  return (
    <>
      <SettingModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <Button isIconOnly color="secondary" onClick={handleOpenSettings}>
        <Settings />
      </Button>
    </>
  );
}
