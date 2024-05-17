import React from "react";
import { useQuestionStore } from "@/stores/question-store";
import SmokingGroup from "./smoking-group";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import { scrollById } from "@/lib/utils/scroll.util";
import { InputValueType } from "kbr-nextjs-shared/types";
import { ISmokingTerm } from "health-screening-shared/interfaces";

export default function Smokings5() {
  const n5 = useQuestionStore((state) => state.n5);
  const n5_1 = useQuestionStore((state) => state.n5_1);
  const setN5 = useQuestionStore((state) => state.setN5);
  const setN5_1 = useQuestionStore((state) => state.setN5_1);

  function handleSmokingYn(value: InputValueType): void {
    const y = !!value;

    setN5(y);
    if (!y && n5 !== y) scrollById(questionIds.smoking.n6);
  }

  function handleTermYnChange(yn: boolean): void {
    setN5_1({ ...n5_1, smoking: yn });
  }

  function handleTermChange(
    key: keyof ISmokingTerm,
    value: number | undefined,
  ): void {
    setN5_1({
      ...n5_1,
      term: {
        ...n5_1?.term,
        [key]: value,
      },
    });
  }
  
  return (
    <SmokingGroup
      id={questionIds.smoking.n5}
      groupId={questionIds.smoking.n5_1}
      value={{ yn: n5, result: n5_1 }}
      firstDescription={{
        headmark: "5",
        text: "지금까지 궐련형 전자담배(가열담배, 예)아이코스, 글로, 릴 등)을 피운 적 있습니까?",
      }}
      secondDescription={{
        headmark: "5-1",
        text: "현재 궐련형 전자담배(가열담배) 피우십니까?",
      }}
      ynErrorKeys={["smoking.n5"]}
      subErrorKeys={[
        "smoking.n5_1",
        "smoking.n5_1.smoking",
        "smoking.n5_1.term",
        "smoking.n5_1.term.totalYears",
        "smoking.n5_1.term.cigarettes",
        "smoking.n5_1.term.quitYears",
      ]}
      onSmokingYnChange={handleSmokingYn}
      onTermYnChange={handleTermYnChange}
      onTermChange={handleTermChange}
    />
  );
}
