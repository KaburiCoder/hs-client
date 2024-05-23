import { QuoteDescription, SparkleDescription } from "@/components/description";
import React from "react";
import ActivityWeek from "./activity-week";
import ActivityDay from "./activity-day";
import { useQuestionStore } from "@/stores/questionnaire/question-store";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import { QuestionnaireErrorBox } from "../questionnaire-error-box";

export default function Activities9() {
  const n9_1 = useQuestionStore((state) => state.n9_1);
  const n9_2 = useQuestionStore((state) => state.n9_2);
  const setN9_1 = useQuestionStore((state) => state.setN9_1);
  const setN9_2 = useQuestionStore((state) => state.setN9_2);
  
  return (
    <>
      <QuoteDescription
        className="whitespace-pre-line"
        text={`중강도 신체활동의 예
        ☞ 빠르게 걷기, 복식 테니스, 보통 속도로 자전거 타기, 가벼운 물건 나르기, 청소 등`}
      />
      <SparkleDescription
        className="mt-0"
        text="8번 응답에 관련된 신체활동은 제외하고 답해주십시오."
      />
      <QuestionnaireErrorBox errorKeys={["activity.n9_1"]}>
        <ActivityWeek
          id={questionIds.activity.n9_1}
          headmark="9-1"
          text="평소 1주일간, 숨이 약간 차게 만드는 중강도 신체활동을 며칠 하십니까?"
          value={n9_1}
          onChange={setN9_1}
        />
      </QuestionnaireErrorBox>

      <QuestionnaireErrorBox
        errorKeys={[
          "activity.n9_2",
          "activity.n9_2.hours",
          "activity.n9_2.minutes",
        ]}
      >
        <ActivityDay
          id={questionIds.activity.n9_2}
          headmark="9-2"
          text="평소 하루에 숨이 약간 차게 만드는 중강도 신체활동을 몇 시간 하십니까?"
          value={n9_2}
          onHoursChange={(hours) => {
            setN9_2({ ...n9_2, hours });
          }}
          onMinutesChange={(minutes) => {
            setN9_2({ ...n9_2, minutes });
          }}
        />
      </QuestionnaireErrorBox>
    </>
  );
}
