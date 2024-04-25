import { ClassNameProps } from "kbr-nextjs-shared/props";
import { InputValueType } from "kbr-nextjs-shared/types";
import { BtnRadio } from "./btn-radio";
import { RadioGroup } from "./radio-group";
import { RadioData } from "./interfaces";
import { cn } from "@/lib/utils";

interface StretchedRadioGroupProps extends ClassNameProps {
  value?: InputValueType;
  datas: RadioData[];
  onChange?: (value: InputValueType) => void;
}

export function StretchedRadioGroup({
  value,
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
        value={value}
        onChange={onChange}
      >
        {radios}
      </RadioGroup>
    </>
  );
}
