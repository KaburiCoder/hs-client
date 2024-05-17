import { Checkbox, cn } from "@nextui-org/react";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";

interface Props extends ChildrenProps {
  value?: string;
  checked? : boolean;
  isDisabled?: boolean;
}
export default function BigCheckBox({ value, checked, isDisabled, children }: Props) {
  return (
    <Checkbox    
      value={value}
      isDisabled={isDisabled}
      checked={checked}      
      classNames={{
        base: cn(
          "inline-flex max-w-md w-full bg-content1 m-0",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-purple-100",
          "data-[selected=true]:border-primary",
        ),
        label: "w-full",
      }}
    >
      {children}
    </Checkbox>
  );
}
