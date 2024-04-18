import { BtnCheckBox } from "./btn-checkbox";
import { RadioGroup } from "./radio";

interface BtnCheckBoxesProps {
  title: string;
}

export function BtnCheckBoxes({ title }: BtnCheckBoxesProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white">
      <h3 className="text-lg">{title}</h3>
      <div className="flex gap-2">
        <BtnCheckBox text="진단" />
        <BtnCheckBox text="약물치료" />
      </div>
    </div>
  );
}
