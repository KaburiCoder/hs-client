import React from "react";
import { Center } from "./center";
import DrinksCcInputs from "./drinks-cc-inputs";
import {
  IDrinkingFrequency,
  IDrinkingKind,
} from "health-screening-shared/interfaces";
import { DisabledProps } from "../../lifestyle/lifestyle-body";

interface Props extends DisabledProps {
  value?: IDrinkingKind;
  onFreqencyChange(key: keyof IDrinkingKind, freq: IDrinkingFrequency): void;
}
export default function DrinksCc({
  value,
  isDisabled,
  onFreqencyChange,
}: Props) {
  return (
    <div className="grid grid-cols-5 gap-[1px] bg-primary/30 p-[1px]">
      <Center>술 종류</Center>
      <Center>잔</Center>
      <Center>병</Center>
      <Center>캔</Center>
      <Center>CC</Center>

      <DrinksCcInputs
        header="소주"
        value={value?.soju}
        isDisabled={isDisabled}
        onChange={onFreqencyChange.bind(null, "soju")}
      />
      <DrinksCcInputs
        header="맥주"
        value={value?.beer}
        isDisabled={isDisabled}
        onChange={onFreqencyChange.bind(null, "beer")}
      />
      <DrinksCcInputs
        header="양주"
        value={value?.liquor}
        isDisabled={isDisabled}
        onChange={onFreqencyChange.bind(null, "liquor")}
      />
      <DrinksCcInputs
        header="막걸리"
        value={value?.makgeolli}
        isDisabled={isDisabled}
        onChange={onFreqencyChange.bind(null, "makgeolli")}
      />
      <DrinksCcInputs
        header="와인"
        value={value?.wine}
        isDisabled={isDisabled}
        onChange={onFreqencyChange.bind(null, "wine")}
      />
    </div>
  );
}
