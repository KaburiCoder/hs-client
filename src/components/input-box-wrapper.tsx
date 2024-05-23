import { cn } from "@/lib/utils";
import { Square, SquareCheck } from "lucide-react";
import { useRef } from "react";
import { DisabledProps } from "../lib/props/disabled-props";

export interface InputBoxWrapperProps extends DisabledProps {
  children?: React.ReactNode;
  checked?: boolean;
  className?: string;
  text?: string;
  showCheckIcon?: boolean;
}

export function InputBoxWrapper({
  text,
  checked,
  children,
  className,
  showCheckIcon,
  isDisabled,
}: InputBoxWrapperProps) {
  const labelRef = useRef<HTMLLabelElement>(null);
  const CheckIcon = showCheckIcon
    ? checked
      ? SquareCheck
      : Square
    : undefined;

  return (
    <label
      ref={labelRef}
      tabIndex={isDisabled ? undefined : 0}
      className={cn(
        "flex min-w-20 items-center rounded-lg border px-2 py-4 transition-all",
        "hover:cursor-pointer ",
        CheckIcon ? "justify-center" : "",
        checked
          ? "bg-primary text-white focus-within:bg-primary/80"
          : "bg-white focus-within:bg-primary/10 hover:bg-primary/10",
        className,
      )}
      onFocus={() => {
        const input = labelRef.current?.querySelector("input");
        input?.focus();
      }}
    >
      {children}
      {CheckIcon && (
        <CheckIcon
          className={cn(
            text ? "mr-2" : "",
            checked ? "text-white" : "text-blue-200",
          )}
        />
      )}
      {text && <span className="flex-1 text-center">{text}</span>}
    </label>
  );
}
