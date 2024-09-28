import { ModalProps } from "@/lib/props/modal-props";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { ChildrenClassNameProps } from "kbr-nextjs-shared/props";
import React from "react";

interface SaveDialogProps extends ModalProps, ChildrenClassNameProps {
  title: string;
  isDisabled?: boolean;
  saveButtonText?: string;
  closeButtonText?: string;
  buttonType?: "submit" | "button";
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onClick?: () => void;
}
export const SaveDialog = ({
  title,
  isOpen,
  isDisabled,
  className,
  children,
  saveButtonText = "저장",
  closeButtonText = "닫기",
  buttonType = "submit",
  onOpenChange,
  onSubmit,
  onClick,
}: SaveDialogProps) => {
  const modalChildren = (onClose: () => void) => (
    <>
      <ModalBody className="relative max-h-[35rem] overflow-y-auto">
        {children}
      </ModalBody>
      <ModalFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          {closeButtonText}
        </Button>
        {saveButtonText && (
          <Button
            type={buttonType}
            color="primary"
            isDisabled={isDisabled}
            onClick={onClick}
          >
            {saveButtonText}
          </Button>
        )}
      </ModalFooter>
    </>
  );

  return (
    <Modal
      className={className}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            {buttonType === "submit" ? (
              <form onSubmit={onSubmit}>{modalChildren(onClose)}</form>
            ) : (
              modalChildren(onClose)
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
