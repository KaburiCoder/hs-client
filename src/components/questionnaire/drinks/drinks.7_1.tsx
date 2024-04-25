import { Description, SparkleDescription } from "@/components/description";
import React from "react";
import DrinksCc from "./drinks-cc";
import {
  EDrinkingFreqType,
  IDrinkingFrequency,
  IDrinkingKind,
} from "health-screening-shared/interfaces";
import { useQuestionStore } from "@/stores/question-store";
import { BlurWrapper } from "@/components/blur-wrapper";

export default function Drinks7d1() {
  const { n7, n7_1, setN7_1 } = useQuestionStore();

  function handleFreqencyChange(
    key: keyof IDrinkingKind,
    freq: IDrinkingFrequency,
  ): void {
    const n7d1 = (n7_1 || {}) as IDrinkingKind;
    const updatedData = { ...n7d1, [key]: freq };
    setN7_1(updatedData);
  }

  console.table(n7_1);

  return (
    <>
      <BlurWrapper blur={n7?.type === EDrinkingFreqType.DO_NOT}>
        <Description
          headmark="7-1"
          text="술을 마시는 날은 보통 어느 정도 마십니까?"
        />
        <SparkleDescription
          text={`잔 또는 병 또는 캔 또는 cc 중 한 곳에만 작성해 주십시오.
        (술종류는 복수응답 가능, 하루에 마신 총 양으로 합산, 기타 술 종류는 비슷한 술 종류에 표기)`}
        />
        <DrinksCc value={n7_1} onFreqencyChange={handleFreqencyChange} />
      </BlurWrapper>
    </>
  );
}
