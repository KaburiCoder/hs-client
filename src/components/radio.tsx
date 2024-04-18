import { RadioContext } from "@/providers/radio.context";
import {
  ChildrenClassNameProps,
  ChildrenProps,
  ClassNameProps,
} from "kbr-nextjs-shared/props";
import { BtnCheckBox } from "./btn-checkbox";
import { useContext, useEffect, useRef, useState } from "react";
import { cn } from "@nextui-org/react";
import { Description } from "./description";

interface RadioGroupProps extends ChildrenClassNameProps {
  defaultValue?: string;
  onChange?: (value: string | undefined) => void;
}

export function RadioGroup({
  children,
  className,
  defaultValue,
  onChange,
}: RadioGroupProps) {
  const [value, setValue] = useState<string>();
  const setDefaultRef = useRef<boolean>(true);

  useEffect(() => {
    if (!defaultValue) return;
    setDefaultRef.current = true;
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (value === undefined) return;

    if (setDefaultRef.current) {
      setDefaultRef.current = false;
      return;
    }
    onChange?.(value);
  }, [value, defaultValue]);

  return (
    <RadioContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </RadioContext.Provider>
  );
}

interface BtnRadioProps extends ClassNameProps {
  value: string;
  text?: string;
}

export function BtnRadio({ text, value, className }: BtnRadioProps) {
  const { value: checkValue, setValue } = useRadio();

  return (
    <BtnCheckBox
      className={className}
      text={text}
      value={value}
      type="radio"
      onValueChange={setValue}
      checkValue={checkValue}
    />
  );
}

interface TitledRadioGroupProps extends ClassNameProps {
  title: React.ReactNode;
  datas: {
    text: string;
    value: string;
  }[];
}

export function TitledRadioGroup({ title, datas }: TitledRadioGroupProps) {
  const radios = datas.map((data) => (
    <BtnRadio text={data.text} value={data.value} />
  ));
  return (
    <div className="flex items-center justify-between bg-white px-4 py-2">
      <h3 className="text-lg">{title}</h3>
      <RadioGroup className="flex gap-2">{radios}</RadioGroup>
    </div>
  );
}

export function StretchedRadioGroup({
  title,
  datas,
  className,
}: TitledRadioGroupProps) {
  const radios = datas.map((data) => (
    <BtnRadio
      key={data.value}
      className="flex-1"
      text={data.text}
      value={data.value}
    />
  ));
  return (
    <>
      <Description text={title} />
      <RadioGroup
        className={cn("flex items-stretch gap-2 bg-white py-2", className)}
      >
        {radios}
      </RadioGroup>
    </>
  );
}

const useRadio = () => {
  return useContext(RadioContext);
};
