import React from "react";
import ActivityWeek from "./activity-week";
import { useQuestionStore } from "@/stores/question-store";

export default function Activities10() {
  const { n10, setN10 } = useQuestionStore();

  return (
    <>
      <ActivityWeek
        headmark="10"
        text="최근 1주일 동안 팔굽혀펴기, 윗몸일으키기, 아령, 역기, 철봉 등 근력 운동을 한 날은 며칠입니까?"
        value={n10}
        onChange={setN10}
      />
    </>
  );
}
