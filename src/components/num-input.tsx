"use client";
import { cn } from "@/lib/utils";
import { Input } from "@nextui-org/react";
import { ClassNameProps } from "kbr-nextjs-shared/props";
import { InputValueType } from "kbr-nextjs-shared/types";
import React, { forwardRef, memo, useEffect, useRef, useState } from "react";

export interface NumInputProps extends ClassNameProps {
  id?: string;
  value?: number;
  min?: number;
  max?: number;
  dec?: number;
  inputClassName?: string;
  isDisabled?: boolean;
  variant?: "flat" | "bordered" | "faded" | "underlined" | undefined;
  onChange: (value: number | undefined) => void;
}

export const NumInput = forwardRef<HTMLInputElement, NumInputProps>(
  (
    {
      id,
      value: outValue,
      className,
      inputClassName,
      isDisabled,
      onChange,
      min = 1,
      max = 99,
      dec = 0,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState<InputValueType>(outValue?.toString());
    const prevOutValueRef = useRef<InputValueType>();

    useEffect(() => {
      let inputValue: InputValueType;
      if (prevOutValueRef.current !== outValue) {
        inputValue = outValue;
        prevOutValueRef.current = outValue;
      } else {
        inputValue = value;
      }
      setValue(inputValue);
    }, [outValue, value]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
      const value = parseFloat(e.target.value);

      if (isNaN(value)) {
        setValue(undefined);
        onChange(undefined);
        return;
      }

      if (value < min || value > max) return;
      const sosuText = e.target.value.split(".")?.[1] ?? "";
      if (sosuText.length > dec) {
        return;
      }
      setValue(value);
      onChange(value);
    }

    return (
      <Input
        id={id}
        ref={ref}
        className={className}
        isDisabled={isDisabled}
        classNames={{ input: cn("text-right text-base", inputClassName) }}
        type="number"
        color="primary"
        value={value?.toString() ?? ""}
        onChange={handleChange}
        {...props}
      />
    );
  },
);

NumInput.displayName = "NumInput";
interface LabeldNumInputProps extends NumInputProps {
  id?: string;
  sLabel?: string;
  eLabel?: string;
  isDisabled?: boolean;
}

const _LabeldNumInput = forwardRef<HTMLInputElement, LabeldNumInputProps>(
  (
    {
      id,
      sLabel,
      eLabel,
      min = 1,
      max,
      className,
      inputClassName,
      isDisabled,
      onChange,
      ...props
    }: LabeldNumInputProps,
    ref,
  ) => {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        {sLabel && <span className="whitespace-nowrap">{sLabel}</span>}
        <NumInput
          id={id}
          ref={ref}
          className={cn("inline-block", inputClassName)}
          min={min}
          max={max}
          isDisabled={isDisabled}
          onChange={onChange}
          {...props}
        />
        {eLabel && <span className="whitespace-nowrap">{eLabel}</span>}
      </div>
    );
  },
);

_LabeldNumInput.displayName = "LabeldNumInput";
export const LabeldNumInput = memo(_LabeldNumInput);
