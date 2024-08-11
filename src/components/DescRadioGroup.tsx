import { DisabledProps } from "../lib/props/disabled-props";
import { CustomRadioGroup } from "./CustomRadioGroup";
import { DescriptionWrapper } from "./Description-";

interface DescRadioGroupProps extends DisabledProps {
  id: string;
  headmark: string;
  text: string;
  value: string | undefined;
  items: { [key: string]: string };
  onValueChange: (value: string) => void;
}

export function DescRadioGroup({
  id,
  headmark,
  text,
  value,
  items,
  isDisabled,
  onValueChange,
}: DescRadioGroupProps) {
  return (
    <DescriptionWrapper id={id} headmark={headmark} text={text}>
      <CustomRadioGroup
        row
        minWidth
        value={value}
        onValueChange={onValueChange}
        isDisabled={isDisabled}
        items={items}
      />
    </DescriptionWrapper>
  );
}
