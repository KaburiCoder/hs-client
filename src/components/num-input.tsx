import { cn } from "@/lib/utils";
import { Input } from "@nextui-org/react";
import { ClassNameProps } from "kbr-nextjs-shared/props";
import React, { forwardRef, useEffect, useRef, useState } from "react";

export interface NumInputProps extends ClassNameProps {
  value?: number;
  min?: number;
  max?: number;
  dec?: number;
  inputClassName?: string;
  onChange: (value: number | undefined) => void;
}

export const NumInput = forwardRef<HTMLInputElement, NumInputProps>(
  (
    {
      value: outValue,
      className,
      inputClassName,
      onChange,
      min = 1,
      max = 99,
      dec = 0,
      ...props
    },
    ref,
  ) => {
    const [numValue, setNumValue] = useState<string>();
    const [value, setValue] = useState<number>();
    const prevOutValueRef = useRef<number>();
    function handleInput(e: React.FormEvent<HTMLInputElement>): void {
      const text = e.currentTarget.value;

      if (text === "") {
        setNumValue("");
        setValue(0);
        return;
      }

      let inputValue = parseFloat(text);

      if (inputValue < min || inputValue > max) {
        return;
      }

      const sosuText = text.split(".")?.[1] ?? "";
      if (sosuText.length <= dec) {
        setNumValue(inputValue.toString());
        setValue(inputValue);
      }
    }

    useEffect(() => {
      if ((prevOutValueRef.current = outValue)) return;

      setNumValue(outValue?.toString());
      setValue(outValue);
      prevOutValueRef.current = outValue;
    }, [outValue]);

    useEffect(() => {
      onChange(value);
    }, [value]);

    return (
      <Input
        ref={ref}
        className={className}
        classNames={{ input: cn("text-right text-base", inputClassName) }}
        type="number"
        color="primary"
        value={numValue ?? ""}
        onInput={handleInput}
        {...props}
      />
    );
  },
);

NumInput.displayName = "NumInput";
interface LabeldNumInputProps extends NumInputProps {
  sLabel?: string;
  eLabel?: string;
}

export const LabeldNumInput = forwardRef<HTMLInputElement, LabeldNumInputProps>(
  (
    {
      sLabel,
      eLabel,
      max,
      className,
      inputClassName,
      onChange,
      ...props
    }: LabeldNumInputProps,
    ref,
  ) => {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        {sLabel && <span className="whitespace-nowrap">{sLabel}</span>}
        <NumInput
          ref={ref}
          className={cn("inline-block", inputClassName)}
          min={1}
          max={max}
          onChange={onChange}
          {...props}
        />
        {eLabel && <span className="whitespace-nowrap">{eLabel}</span>}
      </div>
    );
  },
);

LabeldNumInput.displayName = "LabeldNumInput";
