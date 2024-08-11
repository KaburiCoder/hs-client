import { Description, SparkleDescription } from "@/components/Description";
import React from "react";
import DrinksCc from "./drinks-cc";
import { useQuestionStore } from "@/stores/questionnaire/question-store";
import {
  EDrinkingFreqType,
  IDrinkingFrequency,
  IDrinkingKind,
} from "health-screening-shared/interfaces";
import { BlurWrapper } from "@/components/BlurWrapper";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import { QuestionnaireErrorBox } from "../questionnaire-error-box";

export default function Drinks7d2() {
  const n7 = useQuestionStore((state) => state.n7);
  const n7_2 = useQuestionStore((state) => state.n7_2);
  const setN7_2 = useQuestionStore((state) => state.setN7_2);

  console.log("n7_2", n7_2);

  function handleFreqencyChange(
    key: keyof IDrinkingKind,
    freq: IDrinkingFrequency,
  ): void {
    const n7d2 = (n7_2 || {}) as IDrinkingKind;

    setN7_2({ ...n7d2, [key]: freq });
  }

  return (
    <>
      <BlurWrapper blur={n7?.type === EDrinkingFreqType.DO_NOT}>
        <QuestionnaireErrorBox errorKeys={["drink.n7_2"]}>
          <Description
            id={questionIds.drink.n7_2}
            headmark="7-2"
            text="하루 동안 가장 많이 마셨던 음주량은 어느 정도입니까?"
          />
          <SparkleDescription
            text={`잔 또는 병 또는 캔 또는 cc 중 한 곳에만 작성해 주십시오(술 종류는 복수응답 가능, 하루에 마신 총 양으로 합산, 기타 술 종류는 비슷한 술 종류에 표기)`}
          />
          <SparkleDescription
            className="mt-0"
            text={`폭음: 하루 동안의 최대음주량으로 판단`}
          />
          <DrinksCc value={n7_2} onFreqencyChange={handleFreqencyChange} />
        </QuestionnaireErrorBox>
      </BlurWrapper>
    </>
  );
}
