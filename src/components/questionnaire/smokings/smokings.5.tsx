import React from "react";
import { useQuestionStore } from "@/stores/question-store";
import { ISmokingResult } from "@/stores/interfaces/smoking";
import SmokingGroup from "./smoking-group";

export default function Smokings5() {
  const { smoking, setSmoking } = useQuestionStore();

  function handleSmokingTermChange(result: ISmokingResult): void {
    setSmoking({ ...smoking, n5_1: result });
  }

  function handleSmokingYnChange(value: string | number | undefined): void {
    setSmoking({ ...smoking, n5: !!value });
  }

  return (
    <SmokingGroup
      blur={!smoking?.n5}
      firstDescription={{
        headmark: "5",
        text: "지금까지 궐련형 전자담배(가열담배, 예)아이코스, 글로, 릴 등)을 피운 적 있습니까?",
      }}
      secondDescription={{
        headmark: "5-1",
        text: "현재 궐련형 전자담배(가열담배) 피우십니까?",
      }}
      handleSmokingTermChange={handleSmokingTermChange}
      handleSmokingYnChange={handleSmokingYnChange}
    />
  );
}
