import { RadioContext } from "@/providers/radio.context";
import {
  ChildrenClassNameProps,
  ClassNameProps,
} from "kbr-nextjs-shared/props";
import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import { cn } from "@nextui-org/react";
import { InputBoxWrapper } from "./input-box-wrapper";
import { InputValueType } from "kbr-nextjs-shared/types";

interface RadioGroupProps extends ChildrenClassNameProps {
  defaultValue?: InputValueType;
  onChange?: (value: InputValueType) => void;
}

export function RadioGroup({
  children,
  className,
  defaultValue,
  onChange,
}: RadioGroupProps) {
  const [value, setValue] = useState<
    string | number | readonly string[] | undefined
  >();
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

  return (
    <RadioContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </RadioContext.Provider>
  );
}

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

interface RadioData {
  text: string;
  value: string | number;
}
interface TitledRadioGroupProps extends ClassNameProps {
  title: React.ReactNode;
  datas: RadioData[];
  onChange?: (value: InputValueType) => void;
}

export function TitledRadioGroup({
  title,
  datas,
  onChange,
}: TitledRadioGroupProps) {
  const radios = datas.map((data) => (
    <BtnRadio key={data.value} text={data.text} value={data.value} />
  ));
  return (
    <div className="flex items-center justify-between bg-white px-4 py-2">
      <h3 className="text-lg">{title}</h3>
      <RadioGroup className="flex gap-2" onChange={onChange}>
        {radios}
      </RadioGroup>
    </div>
  );
}

interface StretchedRadioGroupProps extends ClassNameProps {
  datas: RadioData[];
  onChange?: (value: InputValueType) => void;
}

export function StretchedRadioGroup({
  datas,
  className,
  onChange,
}: StretchedRadioGroupProps) {
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
      <RadioGroup
        className={cn(
          "flex flex-wrap items-stretch gap-2 bg-white py-2",
          className,
        )}
        onChange={onChange}
      >
        {radios}
      </RadioGroup>
    </>
  );
}

export const useRadio = () => {
  return useContext(RadioContext);
};
