import React, { useState } from "react";
import { NumInput } from "@/components/num-input";
import { BtnRadio, RadioGroup } from "@/components/radio";
import { cn } from "@/lib/utils";
import { Description } from "@/components/description";

enum DrinkingFreq {
  weeks = "1",
  months = "2",
  years = "3",
  doNot = "4",
}
const defaultFreq: DrinkingFreq = DrinkingFreq.doNot;

export default function Drinks7() {
  const [drinkFreq, setDrinkFreq] = useState<DrinkingFreq>(defaultFreq);
  const { min, max } = GetMinMaxFreq(drinkFreq);

  return (
    <>
      <Description text="술을 마시는 횟수는 어느 정도입니까? (1개만 응답)" />
      <div className="flex flex-wrap items-center gap-2">
        <RadioGroup
          className="flex gap-2"
          defaultValue={defaultFreq}
          onChange={(data) => setDrinkFreq(data as DrinkingFreq)}
        >
          <BtnRadio value={DrinkingFreq.doNot} text="마시지 않는다." />
          <BtnRadio value={DrinkingFreq.weeks} text="일주일에" />
          <BtnRadio value={DrinkingFreq.months} text="한 달에" />
          <BtnRadio value={DrinkingFreq.years} text="1년에" />
        </RadioGroup>

        <div
          className={cn(
            "flex items-center gap-2",
            drinkFreq === DrinkingFreq.doNot ? "hidden" : ""
          )}
        >
          <NumInput
            className={cn("w-14")}
            min={min}
            max={max}
            onChange={() => {}}
          />
          <div>번</div>
        </div>
      </div>
    </>
  );
}

function GetMinMaxFreq(freq: DrinkingFreq) {
  switch (freq) {
    case DrinkingFreq.months:
      return { min: 1, max: 30 };
    case DrinkingFreq.weeks:
      return { min: 1, max: 7 };
    case DrinkingFreq.years:
      return { min: 1, max: 365 };
  }
  return { min: 0, max: 0 };
}
