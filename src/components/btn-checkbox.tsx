import { cn } from "@nextui-org/react";
import { useState, forwardRef } from "react";
import { Square, SquareCheck } from "lucide-react";
export interface BtnCheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  checkValue?: string | number;
  checked?: boolean;
  showCheckIcon?: boolean;
  onCheckChange?: (value: boolean) => void;
  onValueChange?: (value: string) => void;
}

export const BtnCheckBox = forwardRef<HTMLInputElement, BtnCheckBoxProps>(
  (
    {
      text,
      checkValue,
      showCheckIcon,
      className,
      onCheckChange,
      onValueChange,
      ...props
    }: BtnCheckBoxProps,
    ref
  ) => {
    const [checked, setChecked] = useState(false);
    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
      setChecked(event.target.checked);
      onCheckChange?.(event.target.checked);
      onValueChange?.(props.value as string);
    }

    const CheckIcon = showCheckIcon
      ? checked
        ? SquareCheck
        : Square
      : undefined;
    const checkedResult =
      props.type === "radio" ? props.value === checkValue : checked;
    return (
      <label
        className={cn(
          "border py-4 px-2 min-w-20 rounded-lg transition-all flex items-center",
          checkedResult ? "bg-primary text-white" : "bg-white",
          className
        )}
      >
        <input
          ref={ref}
          className={"no-radio hidden"}
          type="checkbox"
          checked={checkedResult}
          {...props}
          onChange={handleOnChange}
        />
        {CheckIcon && (
          <CheckIcon
            className={cn("mr-2", checked ? "text-white" : "text-gray-300")}
          />
        )}
        {text && <span className="flex-1 text-center">{text}</span>}
      </label>
    );
  }
);
