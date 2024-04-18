import { NumInput } from "@/components/num-input";
import { cn } from "@nextui-org/react";
import { ClassNameProps } from "kbr-nextjs-shared/props";

interface SmokingInputProps extends ClassNameProps {
  sLabel: string;
  eLabel: string;
  max: number;
  inputClassName?: string;
  onChange: (value: number | undefined) => void;
}

export function SmokingInput({
  sLabel,
  eLabel,
  max,
  inputClassName,
  onChange,
}: SmokingInputProps) {
  return (
    <div className="flex items-center gap-2">
      <span>{sLabel}</span>
      <NumInput
        className={cn("inline-block", inputClassName)}
        min={1}
        max={max}
        onChange={onChange}
      />
      <span>{eLabel}</span>
    </div>
  );
}
