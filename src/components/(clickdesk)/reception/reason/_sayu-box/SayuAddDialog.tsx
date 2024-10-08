import { SaveDialog } from "@/components/SaveDialog";
import { InputX } from "@/components/ui/InputX";
import { ModalProps } from "@/lib/props/modal-props";
import React, { useEffect, useRef, useState } from "react";
import { useSayuAddDialogService } from "./_hooks/use-sayu-add-dialog-service";
import { Checkbox } from "@nextui-org/react";
import ErrorBox from "@/components/ErrorBox";
import { useReasonSelDoctor } from "../_providers/reason-sel-doctor.provider";

interface Props extends ModalProps {}

export const SayuAddDialog = ({ isOpen, onOpenChange, onClose }: Props) => {
  const { errorMessage, saveReason } = useSayuAddDialogService({
    isOpen,
    onClose,
  });
  const { doctorId } = useReasonSelDoctor();
  const [useNHISHealthCheckUp, setUseNHISHealthCheckUp] =
    useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    saveReason({
      text: inputRef.current?.value!,
      useNHISHealthCheckUp,
      doctorId,
    });
  }

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    } else {
      setUseNHISHealthCheckUp(false);
    }
  }, [isOpen]);

  return (
    <SaveDialog
      title="내원사유 추가"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onSubmit={handleSubmit}
    >
      <InputX ref={inputRef} autoFocus />
      <Checkbox
        checked={useNHISHealthCheckUp}
        onValueChange={setUseNHISHealthCheckUp}
      >
        공단검진
      </Checkbox>
      <ErrorBox errorMessage={errorMessage} />
    </SaveDialog>
  );
};
