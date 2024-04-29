import { ClassNameProps } from "kbr-nextjs-shared/props";
import { InputValueType } from "kbr-nextjs-shared/types";
import { BtnRadio } from "./btn-radio";
import { RadioGroup } from "./radio-group";
import { RadioData } from "./interfaces"; 

interface TitledRadioGroupProps extends ClassNameProps {
  title: React.ReactNode;
  datas: RadioData[];
  value?: InputValueType;
  onChange?: (value: InputValueType) => void;
}

export function TitledRadioGroup({
  value,
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
      <RadioGroup value={value} className="flex gap-2" onChange={onChange}>
        {radios}
      </RadioGroup>
    </div>
  );
}
