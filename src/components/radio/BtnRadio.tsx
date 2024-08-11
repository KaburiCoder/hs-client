import { forwardRef } from "react";
import { InputBoxWrapper } from "../InputBoxWrapper";
import { cn } from "@/lib/utils";
import { useRadio } from "@/providers/radio.context";
import { DisabledProps } from "../../lib/props/disabled-props";

export interface BtnRadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    DisabledProps {
  text?: string;
}

export const BtnRadio = forwardRef<HTMLInputElement, BtnRadioProps>(
  ({ text, value: checkValue, isDisabled, className, ...props }, ref) => {
    const { value, setValue } = useRadio();
    const checked = value === checkValue;
    return (
      <InputBoxWrapper
        checked={checked}
        text={text}
        isDisabled={isDisabled}
        className={className}
      >
        <input
          ref={ref}
          disabled={isDisabled}
          className={cn("no-radio", text ? "" : "absolute")}
          type="radio"
          value={value}
          checked={checked}
          onChange={(e) => {
            setValue(checkValue);
          }}
          {...props}
        />
      </InputBoxWrapper>
    );
  },
);
BtnRadio.displayName = "BtnRadio";
