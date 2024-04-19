import { forwardRef } from "react";
import { InputBoxWrapper } from "../input-box-wrapper";
import { cn } from "@/lib/utils";
import { useRadio } from "@/providers/radio.context";

export interface BtnRadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}

export const BtnRadio = forwardRef<HTMLInputElement, BtnRadioProps>(
  ({ text, value: checkValue, className, ...props }, ref) => {
    const { value, setValue } = useRadio();
    const checked = value === checkValue;
    return (
      <InputBoxWrapper checked={checked} text={text} className={className}>
        <input
          ref={ref}
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
BtnRadio.displayName = "Radio";
