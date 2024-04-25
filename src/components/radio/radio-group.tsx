import { RadioContext } from "@/providers/radio.context";
import { ChildrenClassNameProps } from "kbr-nextjs-shared/props";
import { InputValueType } from "kbr-nextjs-shared/types";
import { useEffect, useRef, useState } from "react";

interface RadioGroupProps extends ChildrenClassNameProps {
  value?: InputValueType;
  defaultValue?: InputValueType;
  onChange?: (value: InputValueType) => void;
}

export function RadioGroup({
  value: outValue,
  children,
  className,
  defaultValue,
  onChange,
}: RadioGroupProps) {
  const [value, setValue] = useState<InputValueType>();
  const setDefaultRef = useRef<boolean>(true);

  useEffect(() => {
    if (!defaultValue) return;
    setDefaultRef.current = true;
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (setDefaultRef.current) {
      setDefaultRef.current = false;
      return;
    }

    if (value === undefined) return;

    onChange?.(value);
  }, [value, defaultValue]);

  useEffect(() => {
    setValue(outValue);
  }, [outValue]);

  return (
    <RadioContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </RadioContext.Provider>
  );
}
