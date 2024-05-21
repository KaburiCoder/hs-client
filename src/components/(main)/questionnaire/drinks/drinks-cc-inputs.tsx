import React, { useState } from "react";
import { Center } from "./center";
import { NumInput } from "@/components/num-input";
import { IDrinkingFrequency } from "health-screening-shared/interfaces";
import { DisabledProps } from "../../lifestyle/lifestyle-body";

interface Props extends DisabledProps {
  header: string;
  onChange: (freq: IDrinkingFrequency) => void;
  value?: IDrinkingFrequency;
}

export default function DrinksCcInputs({
  value,
  header,
  isDisabled,
  onChange,
}: Props) {
  function setDrinksCc(obj: IDrinkingFrequency) {
    onChange(obj);
  }

  return (
    <>
      <Center>{header}</Center>
      <NumInputX
        value={value?.cup}
        isDisabled={isDisabled}
        onChange={(cup) => setDrinksCc({ cup })}
      />
      <NumInputX
        value={value?.bottle}
        isDisabled={isDisabled}
        onChange={(bottle) => setDrinksCc({ bottle })}
      />
      <NumInputX
        value={value?.can}
        isDisabled={isDisabled}
        onChange={(can) => setDrinksCc({ can })}
      />
      <NumInputX
        value={value?.cc}
        isDisabled={isDisabled}
        onChange={(cc) => setDrinksCc({ cc })}
      />
    </>
  );
}

function NumInputX({
  value,
  isDisabled,
  onChange,
}: {
  value?: number;
  onChange: (value?: number) => void;
} & DisabledProps) {
  return (
    <Center>
      <NumInput
        isDisabled={isDisabled}
        value={value}
        max={9999.9}
        dec={1}
        onChange={onChange}
      />
    </Center>
  );
}
