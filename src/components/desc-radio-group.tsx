import { CustomRadioGroup } from "./custom-radio-group";
import { DescriptionWrapper } from "./description";

interface DescRadioGroupProps {
  id: string;
  headmark: string;
  text: string;
  value: string | null | undefined;
  items: { [key: string]: string };
  onValueChange: (value: string) => void;
}

export function DescRadioGroup({
  id,
  headmark,
  text,
  value,
  items,
  onValueChange,
}: DescRadioGroupProps) {
  return (
    <DescriptionWrapper id={id} headmark={headmark} text={text}>
      <CustomRadioGroup
        row
        minWidth
        value={value}
        onValueChange={onValueChange}
        items={items}
      />
    </DescriptionWrapper>
  );
}
