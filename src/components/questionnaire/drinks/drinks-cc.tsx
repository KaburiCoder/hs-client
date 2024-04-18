import { NumInput } from "@/components/num-input";
import { Input } from "@nextui-org/react";
import { ChildrenClassNameProps, ChildrenProps } from "kbr-nextjs-shared/props";
import React from "react";
import { Center } from "./center";
import DrinksCcInputs from "./drinks-cc-inputs";

export default function DrinksCc() {
  return (
    <div className="grid grid-cols-5 bg-primary/30 gap-[1px] p-[1px]">
      <Center>술 종류</Center>
      <Center>잔</Center>
      <Center>병</Center>
      <Center>캔</Center>
      <Center>CC</Center>

      <DrinksCcInputs header="소주" />
      <DrinksCcInputs header="맥주" />
      <DrinksCcInputs header="양주" />
      <DrinksCcInputs header="막걸리" />
      <DrinksCcInputs header="와인" />
    </div>
  );
}
