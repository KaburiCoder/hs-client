import React from "react";
import { useQuestionStore } from "@/stores/question-store";
import SmokingGroup from "./smoking-group";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import { scrollById } from "@/lib/utils/scroll.util";
import { InputValueType } from "kbr-nextjs-shared/types";

export default function Smokings5() {
  const { n5, n5_1, setN5, setN5_1 } = useQuestionStore();

  function handleSmokingYn(value: InputValueType): void {
    const y = !!value;

    setN5(y);
    if (!y) scrollById(questionIds.smoke.n6);
  }

  return (
    <SmokingGroup
      id={questionIds.smoke.n5}
      value={{ yn: n5, result: n5_1 }}
      firstDescription={{
        headmark: "5",
        text: "지금까지 궐련형 전자담배(가열담배, 예)아이코스, 글로, 릴 등)을 피운 적 있습니까?",
      }}
      secondDescription={{
        headmark: "5-1",
        text: "현재 궐련형 전자담배(가열담배) 피우십니까?",
      }}
      handleSmokingYnChange={handleSmokingYn}
      handleSmokingTermChange={setN5_1}
    />
  );
}
