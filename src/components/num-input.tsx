import { cn } from "@/lib/utils";
import { Input } from "@nextui-org/react";
import { ClassNameProps } from "kbr-nextjs-shared/props";
import { useEffect, useState } from "react";

interface NumInputProps extends ClassNameProps {
  value?: number;
  min?: number;
  max?: number;
  dec?: number;
  inputClassName?: string;
  onChange: (value: number | undefined) => void;
}

export function NumInput({
  value: outValue,
  className,
  inputClassName,
  onChange,
  min = 1,
  max = 99,
  dec = 0,
  ...props
}: NumInputProps) {
  const [numValue, setNumValue] = useState<string>();
  const [value, setValue] = useState<number>();

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
    setNumValue(outValue?.toString());
    setValue(outValue);
  }, [outValue]);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <Input
      className={className}
      classNames={{ input: cn("text-right text-base", inputClassName) }}
      type="number"
      color="primary"
      value={numValue ?? ""}
      onInput={handleInput}
      {...props}
    />
  );
}
