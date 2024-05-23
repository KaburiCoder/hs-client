import React from "react";
import SmokingGroup from "./smoking-group";
import { InputValueType } from "kbr-nextjs-shared/types";
import { scrollById } from "@/lib/utils/scroll.util";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import {
  ISmokingResult,
  ISmokingTerm,
} from "health-screening-shared/interfaces";
import { useQuestionStore } from "@/stores/questionnaire/question-store";

export default function Smokings4() {
  const n4 = useQuestionStore((state) => state.n4);
  const n4_1 = useQuestionStore((state) => state.n4_1);
  const setN4 = useQuestionStore((state) => state.setN4);
  const setN4_1 = useQuestionStore((state) => state.setN4_1);

  function handleSmokingYn(value: InputValueType): void {
    const y = !!value;

    setN4(y);
    if (!y && n4 !== y) scrollById(questionIds.smoking.n5);
  }

  function handleTermYnChange(yn: boolean): void {
    setN4_1({ ...n4_1, smoking: yn });
  }

  function handleTermChange(
    key: keyof ISmokingTerm,
    value: number | undefined,
  ): void {
    setN4_1({
      ...n4_1,
      term: {
        ...n4_1?.term,
        [key]: value,
      },
    });
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
      onTermYnChange={handleTermYnChange}
      onTermChange={handleTermChange}
      onSmokingYnChange={handleSmokingYn}
    />
  );
}
