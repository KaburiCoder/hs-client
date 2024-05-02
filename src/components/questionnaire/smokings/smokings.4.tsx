import React from "react";
import { useQuestionStore } from "@/stores/question-store";
import SmokingGroup from "./smoking-group";
import { InputValueType } from "kbr-nextjs-shared/types";
import { scrollById } from "@/lib/utils/scroll.util";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import { ISmokingResult } from "health-screening-shared/interfaces";

export default function Smokings4() {
  const n4 = useQuestionStore((state) => state.n4);
  const n4_1 = useQuestionStore((state) => state.n4_1);
  const setN4 = useQuestionStore((state) => state.setN4);
  const setN4_1 = useQuestionStore((state) => state.setN4_1);

  function handleSmokingYn(value: InputValueType): void {
    const y = !!value;

    setN4(y);
    if (!y) scrollById(questionIds.smoking.n5);
  }

  function handleSmokingTermChange(result: ISmokingResult): void {
    setN4_1(result);
  }

  return (
    <SmokingGroup
      id={questionIds.smoking.n4}
      groupId={questionIds.smoking.n4_1}
      value={{ yn: n4, result: n4_1 }}
      firstDescription={{
        headmark: "4",
        text: "지금까지 평생 총 5갑(100개비) 이상의 일반담배(궐련)를 피운 적이 있습니까?",
      }}
      secondDescription={{
        headmark: "4-1",
        text: "현재 일반담배(궐련)을 피우십니까?",
      }}
      ynErrorKeys={["smoking.n4"]}
      subErrorKeys={[
        "smoking.n4_1",
        "smoking.n4_1.smoking",
        "smoking.n4_1.term",
        "smoking.n4_1.term.totalYears",
        "smoking.n4_1.term.cigarettes",
        "smoking.n4_1.term.quitYears",
      ]}
      handleSmokingYnChange={handleSmokingYn}
      handleSmokingTermChange={handleSmokingTermChange}
    />
  );
}
