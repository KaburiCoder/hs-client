import { ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";

interface Props extends ChildrenProps {
  action?: string | ((formData: FormData) => void) | undefined;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
export default function AccountBaseForm({ children, action, onSubmit }: Props) {
  return (
    <form action={action} onSubmit={onSubmit} className="flex flex-col gap-4">
      {children}
    </form>
  );
}
