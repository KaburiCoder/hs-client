import { QuoteDescription } from "@/components/description";
import React from "react";
import ActivityWeek from "./activity-week";
import ActivityDay from "./activity-day";
import { useQuestionStore } from "@/stores/question-store";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import { QuestionnaireErrorBox } from "../questionnaire-error-box";

export default function Activities8() {
  const n8_1 = useQuestionStore((state) => state.n8_1);
  const n8_2 = useQuestionStore((state) => state.n8_2);
  const setN8_1 = useQuestionStore((state) => state.setN8_1);
  const setN8_2 = useQuestionStore((state) => state.setN8_2);

  return (
    <>
      <QuoteDescription
        className="whitespace-pre-line"
        text={`고강도 신체활동의 예
    ☞ 달리기, 에어로빅, 빠른 속도로 자전거 타기, 건설 현장 노동, 계단으로 물건 나르기 등`}
      />

      <QuestionnaireErrorBox errorKeys={["activity.n8_1"]}>
        <ActivityWeek
          id={questionIds.activity.n8_1}
          headmark="8-1"
          text="평소 1주일간, 숨이 많이 차게 만드는 고강도 신체활동을 며칠 하십니까?"
          value={n8_1}
          onChange={setN8_1}
        />
      </QuestionnaireErrorBox>

      <QuestionnaireErrorBox
        errorKeys={[
          "activity.n8_2",
          "activity.n8_2.hours",
          "activity.n8_2.minutes",
        ]}
      >
        <ActivityDay
          id={questionIds.activity.n8_2}
          headmark="8-2"
          text="평소 하루에 숨이 많이 차게 만드는 고강도 신체활동을 몇 시간 하십니까?"
          value={n8_2}
          onHoursChange={(hours) => {
            setN8_2({ ...n8_2, hours });
          }}
          onMinutesChange={(minutes) => {
            setN8_2({ ...n8_2, minutes });
          }}
        />
      </QuestionnaireErrorBox>
    </>
  );
}
