import { RadioGroup, RadioGroupProps } from "@nextui-org/react";
import { CustomRadio } from "./custom-radio";

interface CustomRadioGroupProps extends RadioGroupProps {
  items: { [key: string]: string };
  row?: boolean;
  minWidth?: boolean;
}

export const CustomRadioGroup = ({
  items,
  row,
  minWidth,
  classNames,
  ...props
}: CustomRadioGroupProps) => {
  const itemComponents = Object.keys(items).map((key) => (
    <CustomRadio
      key={key}
      value={key}
      classNames={{ base: minWidth ? "min-w-48" : minWidth }}
    >
      {items[key]}
    </CustomRadio>
  ));

  return (
    <RadioGroup
      {...props}
      classNames={{ ...classNames, wrapper: row ? "flex-row" : "" }}
    >
      {itemComponents}
    </RadioGroup>
  );
};
