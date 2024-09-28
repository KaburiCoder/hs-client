import { SaveDialog } from "@/components/SaveDialog";
import { ModalProps } from "@/lib/props/modal-props";
import { WebAppUser } from "@/models/web-app-user";
import { Button } from "@nextui-org/react";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import { useWebAppUserSettings } from "./hooks/use-web-app-user-settings";

export interface UserSettingsDialogProps extends ModalProps {
  user: WebAppUser;
}

export const WebAppUserSettingsDialog = (props: UserSettingsDialogProps) => {
  const { user, isOpen } = props;

  const { handleDeleteUser, isPending } = useWebAppUserSettings({
    onDeleteSuccess: props.onClose,
  });

  return (
    <SaveDialog
      className="min-w-[30rem]"
      title="사용자 설정"
      isOpen={isOpen}
      saveButtonText=""
      isDisabled={isPending}
      onOpenChange={props.onOpenChange}
      // onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-4 gap-2">
        <LabeldItem label="eClick ID">{user.csUserId} </LabeldItem>
        <LabeldItem label="사용자 이름">{user.name}</LabeldItem>

        <Button
          onClick={handleDeleteUser.bind(null, user)}
          type="button"
          color="danger"
          variant="faded"
          className="col-span-4"
        >
          계정 삭제
        </Button>
      </div>
    </SaveDialog>
  );
};

export interface LabeldItemProps extends ChildrenProps {
  label: string;
}
export const LabeldItem = ({ label, children }: LabeldItemProps) => {
  return (
    <>
      <div className="flex items-center justify-center rounded bg-purple-100 p-2">
        {label}
      </div>
      <div className="col-span-3 flex items-center">{children}</div>
    </>
  );
};
