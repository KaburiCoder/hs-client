import React, { useState } from "react";
import { NumInput } from "@/components/num-input";
import { cn } from "@/lib/utils";
import { Description } from "@/components/description";
import { RadioGroup } from "@/components/radio/radio-group";
import { BtnRadio } from "@/components/radio/btn-radio";
import { useQuestionStore } from "@/stores/question-store";
import { InputValueType } from "kbr-nextjs-shared/types";
import { EDrinkingFreqType } from "health-screening-shared/interfaces";
import { scrollById } from "@/lib/utils/scroll.util";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import { BlurWrapper } from "@/components/blur-wrapper";

export default function Drinks7() {
  const { n7, setN7 } = useQuestionStore();
  const { min, max } = GetMinMaxFreq(n7?.type);

  function handleSelect(_value: InputValueType): void {
    const value = _value as EDrinkingFreqType;
    setN7({ type: value });
    if (value === EDrinkingFreqType.DO_NOT) {
      scrollById(questionIds.activity.head);
    }
  }

  function handleFrequencyChange(value: number | undefined): void {
    setN7({ ...n7, frequency: value });
  }

  return (
    <>
      <Description
        headmark="7"
        text="술을 마시는 횟수는 어느 정도입니까? (1개만 응답)"
      />
      <div className="flex flex-wrap items-center gap-2 py-2">
        <RadioGroup
          value={n7?.type as EDrinkingFreqType}
          className="flex flex-wrap gap-2"
          onChange={handleSelect}
        >
          <BtnRadio value={EDrinkingFreqType.DO_NOT} text="마시지 않는다." />
          <BtnRadio value={EDrinkingFreqType.WEEKS} text="일주일에" />
          <BtnRadio value={EDrinkingFreqType.MONTHS} text="한 달에" />
          <BtnRadio value={EDrinkingFreqType.YEARS} text="1년에" />
        </RadioGroup>

        <BlurWrapper
          className="flex items-center gap-2"
          blur={!n7 || n7.type === EDrinkingFreqType.DO_NOT}
        >
          <NumInput
            className={cn("w-14")}
            min={min}
            max={max}
            value={n7?.frequency}
            onChange={handleFrequencyChange}
          />
          <div>번</div>
        </BlurWrapper>
      </div>
    </>
  );
}

function GetMinMaxFreq(freq: EDrinkingFreqType | undefined) {
  switch (freq) {
    case EDrinkingFreqType.MONTHS:
      return { min: 1, max: 30 };
    case EDrinkingFreqType.WEEKS:
      return { min: 1, max: 7 };
    case EDrinkingFreqType.YEARS:
      return { min: 1, max: 365 };
  }
  return { min: 0, max: 0 };
}
