import React, { useState } from "react";
import { Center } from "./center";
import { NumInput } from "@/components/NumInput";
import { IDrinkingFrequency } from "health-screening-shared/interfaces";
import { DisabledProps } from "../../../../lib/props/disabled-props";

interface Props extends DisabledProps {
  header: string;
  onChange: (freq: IDrinkingFrequency) => void;
  firstComponentId?: string;
  value?: IDrinkingFrequency;
}

export default function DrinksCcInputs({
  value,
  header,
  isDisabled,
  firstComponentId,
  onChange,
}: Props) {
  function setDrinksCc(obj: IDrinkingFrequency) {
    onChange(obj);
  }

  return (
    <>
      <Center>{header}</Center>
      <NumInputX
        id={firstComponentId}
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
  id,
  value,
  isDisabled,
  onChange,
}: {
  id?: string;
  value?: number;
  onChange: (value?: number) => void;
} & DisabledProps) {
  return (
    <Center>
      <NumInput
        id={id}
        isDisabled={isDisabled}
        value={value}
        max={9999.9}
        dec={1}
        onChange={onChange}
      />
    </Center>
  );
}
