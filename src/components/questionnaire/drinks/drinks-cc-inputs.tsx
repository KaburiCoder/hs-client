import React, { useState } from "react";
import { Center } from "./center";
import { NumInput } from "@/components/num-input";

interface Props {
  header: string;
}

interface DrinksCc {
  cup?: number;
  bottle?: number;
  can?: number;
  cc?: number;
}
export default function DrinksCcInputs({ header }: Props) {
  const [data, setData] = useState<DrinksCc>();

  function setDrinksCc(obj: DrinksCc) {
    const nonData = Object.values(obj).every((o) => !o);
    if (nonData) return;

    setData(obj);
  }
  return (
    <>
      <Center>{header}</Center>
      <NumInputX value={data?.cup} onChange={(cup) => setDrinksCc({ cup })} />
      <NumInputX
        value={data?.bottle}
        onChange={(bottle) => setDrinksCc({ bottle })}
      />
      <NumInputX value={data?.can} onChange={(can) => setDrinksCc({ can })} />
      <NumInputX value={data?.cc} onChange={(cc) => setDrinksCc({ cc })} />
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
