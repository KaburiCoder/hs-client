import { BlurWrapper } from "@/components/blur-wrapper";
import { Description } from "@/components/description";
import { StretchedRadioGroup } from "@/components/radio/strectched-radio-group";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import { ISmokingN6d1 } from "health-screening-shared/interfaces";
import React from "react";
import { InputValueType } from "kbr-nextjs-shared/types";
import { scrollById } from "@/lib/utils/scroll.util";
import { convertBoolToInt } from "@/lib/utils/convert.util";
import { QuestionnaireErrorBox } from "../questionnaire-error-box";
import { useQuestionStore } from "@/stores/questionnaire/question-store";

export default function Smokings6() {
  const n6 = useQuestionStore((state) => state.n6);
  const n6_1 = useQuestionStore((state) => state.n6_1);
  const setN6 = useQuestionStore((state) => state.setN6);
  const setN6_1 = useQuestionStore((state) => state.setN6_1);

  function handleSmokingYn(value: InputValueType): void {
    const y = !!value;

    setN6(y);
    if (!y && n6 !== y) scrollById(questionIds.drink.head);
  }

  function handleRadioSelected(value: InputValueType): void {    
    setN6_1(value as ISmokingN6d1);
    if (value && n6_1 !== value) scrollById(questionIds.drink.head);
  }

  return (
    <>
      <QuestionnaireErrorBox errorKeys={["smoking.n6"]}>
        <Description
          id={questionIds.smoking.n6}
          headmark="6"
          text="액상형 전자담배를 사용한 경험이 있습니까?"
        />
        <StretchedRadioGroup
          value={convertBoolToInt(n6)}
          datas={[
            { text: "예", value: 1 },
            { text: "아니오", value: 0 },
          ]}
          onChange={handleSmokingYn}
        />
      </QuestionnaireErrorBox>

      <BlurWrapper blur={!n6}>
        <QuestionnaireErrorBox errorKeys={["smoking.n6_1"]}>
          <Description
            id={questionIds.smoking.n6_1}
            headmark="6-1"
            text="최근 한 달 동안 액상형 전자담배를 사용한 경험이 있습니까?"
          />
          <StretchedRadioGroup
            value={n6_1}
            datas={[
              { text: "아니오", value: ISmokingN6d1.NO },
              { text: "월 1~2일", value: ISmokingN6d1.MONTH_1_2 },
              { text: "월 3~9일", value: ISmokingN6d1.MONTH_3_9 },
              { text: "월 10~29일", value: ISmokingN6d1.MONTH_10_29 },
              { text: "매일", value: ISmokingN6d1.EVERY_DAY },
            ]}
            onChange={handleRadioSelected}
          />
        </QuestionnaireErrorBox>
      </BlurWrapper>
    </>
  );
}
