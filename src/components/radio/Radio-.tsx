import { useRadio } from "@/providers/radio.context";
import { forwardRef } from "react";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ text, value: checkValue, ...props }, ref) => {
    const { value, setValue } = useRadio();
    return (
      <input
        ref={ref}
        type="radio"
        value={value}
        checked={value === checkValue}
        onChange={(e) => {
          setValue(checkValue);
        }}
        {...props}
      />
    );
  },
);
Radio.displayName = "Radio";
