import { Description, SparkleDescription } from "@/components/Description";
import React from "react";
import DrinksCc from "./drinks-cc";
import {
  EDrinkingFreqType,
  IDrinkingFrequency,
  IDrinkingKind,
} from "health-screening-shared/interfaces";
import { useQuestionStore } from "@/stores/questionnaire/question-store";
import { BlurWrapper } from "@/components/BlurWrapper";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import { QuestionnaireErrorBox } from "../questionnaire-error-box";

export default function Drinks7d1() {
  const n7 = useQuestionStore((state) => state.n7);
  const n7_1 = useQuestionStore((state) => state.n7_1);
  const setN7_1 = useQuestionStore((state) => state.setN7_1);

  function handleFreqencyChange(
    key: keyof IDrinkingKind,
    freq: IDrinkingFrequency,
  ): void {
    const n7d1 = (n7_1 || {}) as IDrinkingKind;
    const updatedData = { ...n7d1, [key]: freq };
    setN7_1(updatedData);
  }

  return (
    <>
      <BlurWrapper blur={n7?.type === EDrinkingFreqType.DO_NOT}>
        <QuestionnaireErrorBox errorKeys={["drink.n7_1"]}>
          <Description
            id={questionIds.drink.n7_1}
            headmark="7-1"
            text="술을 마시는 날은 보통 어느 정도 마십니까?"
          />
          <SparkleDescription
            text={`잔 또는 병 또는 캔 또는 cc 중 한 곳에만 작성해 주십시오.
        (술종류는 복수응답 가능, 하루에 마신 총 양으로 합산, 기타 술 종류는 비슷한 술 종류에 표기)`}
          />
          <DrinksCc
            firstComponentId={questionIds.drink.n7_1sojuCup}
            value={n7_1}
            onFreqencyChange={handleFreqencyChange}
          />
        </QuestionnaireErrorBox>
      </BlurWrapper>
    </>
  );
}
