import React from "react";
import { useQuestionStore } from "@/stores/question-store";
import SmokingGroup from "./smoking-group";
import { InputValueType } from "kbr-nextjs-shared/types";
import { scrollById } from "@/lib/utils/scroll.util";
import { questionIds } from "@/lib/objects/questionnaire-obj";

export default function Smokings4() {
  const { n4, n4_1, setN4, setN4_1 } = useQuestionStore();

  function handleSmokingYn(value: InputValueType): void {
    const y = !!value;

    setN4(y);
    if (!y) scrollById(questionIds.smoke.n5);
  }

  return (
    <SmokingGroup
      value={{ yn: n4, result: n4_1 }}
      firstDescription={{
        headmark: "4",
        text: "지금까지 평생 총 5갑(100개비) 이상의 일반담배(궐련)를 피운 적이 있습니까?",
      }}
      secondDescription={{
        headmark: "4-1",
        text: "현재 일반담배(궐련)을 피우십니까?",
      }}
      handleSmokingYnChange={handleSmokingYn}
      handleSmokingTermChange={setN4_1}
    />
  );
}
