import React from "react";
import { ISmokingResult } from "@/stores/interfaces/smoking";
import { useQuestionStore } from "@/stores/question-store";
import SmokingGroup from "./smoking-group";

export default function Smokings4() {
  const { smoking, setSmoking } = useQuestionStore();

  function handleSmokingTermChange(result: ISmokingResult): void {
    setSmoking({ ...smoking, n4_1: result });
  }

  function handleSmokingYnChange(value: string | number | undefined): void {
    setSmoking({ ...smoking, n4: !!value });
  }

  return (
    <SmokingGroup
      blur={!smoking?.n4}
      firstDescription={{
        headmark: "4",
        text: "지금까지 평생 총 5갑(100개비) 이상의 일반담배(궐련)를 피운 적이 있습니까?",
      }}
      secondDescription={{
        headmark: "4-1",
        text: "현재 일반담배(궐련)을 피우십니까?",
      }}
      handleSmokingTermChange={handleSmokingTermChange}
      handleSmokingYnChange={handleSmokingYnChange}
    />
  );
}
