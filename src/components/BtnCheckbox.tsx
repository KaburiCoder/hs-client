import { cn } from "@nextui-org/react";
import { useState, forwardRef, useEffect, useRef } from "react";
import { Square, SquareCheck } from "lucide-react";
import { InputBoxWrapper, InputBoxWrapperProps } from "./InputBoxWrapper";
export interface BtnCheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Partial<InputBoxWrapperProps> {
  checkValue?: string | number | readonly string[] | undefined;
  onCheckChange?: (value: boolean) => void;
  onValueChange?: (value: string) => void;
}

export const BtnCheckBox = forwardRef<HTMLInputElement, BtnCheckBoxProps>(
  (
    {
      text,
      checked,
      checkValue,
      showCheckIcon,
      className,
      onCheckChange,
      onValueChange,
      ...props
    }: BtnCheckBoxProps,
    ref,
  ) => {
    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
      onCheckChange?.(event.target.checked);
      onValueChange?.(event.target.value);
    }

    return (
      <InputBoxWrapper
        text={text}
        showCheckIcon={showCheckIcon}
        checked={checked}
        className={className}
      >
        <input
          ref={ref}
          className={cn("no-radio", text ? "" : "absolute")}
          type="checkbox"
          checked={checked ?? false}
          {...props}
          onChange={handleOnChange}
        />
      </InputBoxWrapper>
    );
  },
);

BtnCheckBox.displayName = "BtnCheckBox";
