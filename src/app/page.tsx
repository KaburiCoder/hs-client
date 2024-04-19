"use client";

import { BtnRadio } from "@/components/radio/btn-radio";
import { RadioGroup } from "@/components/radio/radio-group";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RadioGroup onChange={console.log} defaultValue={2}>
        <BtnRadio value={1} text="123" />
        <BtnRadio value={2} />
        <BtnRadio value={"aa"} />
      </RadioGroup>
    </main>
  );
}
