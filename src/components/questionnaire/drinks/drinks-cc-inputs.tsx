import React, { useState } from "react";
import { Center } from "./center";
import { NumInput } from "@/components/num-input";
import { IDrinkingFrequency } from "@/lib/interfaces/drink";
import { Input } from "@nextui-org/react";

interface Props {
  header: string;
  onChange: (freq: IDrinkingFrequency) => void;
  value?: IDrinkingFrequency;
}

export default function DrinksCcInputs({ value, header, onChange }: Props) {
  const [data, setData] = useState<IDrinkingFrequency>();

  function setDrinksCc(obj: IDrinkingFrequency) {
    // const nonData = Object.values(obj).every((o) => !o);
      onChange(obj);
    //   if (nonData) return;
    // setData(obj);
  }

  return (
    <>
      <Center>{header}</Center>
      <NumInputX value={value?.cup} onChange={(cup) => setDrinksCc({ cup })} />
      <NumInputX
        value={value?.bottle}
        onChange={(bottle) => setDrinksCc({ bottle })}
      />
      <NumInputX value={value?.can} onChange={(can) => setDrinksCc({ can })} />
      <NumInputX value={value?.cc} onChange={(cc) => setDrinksCc({ cc })} />
    </>
  );
}

function NumInputX({
  value,
  onChange,
}: {
  value?: number;
  onChange: (value?: number) => void;
}) {
  return (
    <Center>
      <NumInput value={value} max={9999.9} dec={1} onChange={onChange} />
    </Center>
  );
}
