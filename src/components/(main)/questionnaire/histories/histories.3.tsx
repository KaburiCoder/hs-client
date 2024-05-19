import React, { useEffect, useState } from "react";
import { Description } from "@/components/description";
import { Grids } from "@/components/grids";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import { EHistoryN3 } from "health-screening-shared/interfaces";
import { scrollById } from "@/lib/utils/scroll.util";
import { InputValueType } from "kbr-nextjs-shared/types";
import { useQuestionStore } from "@/stores/question-store";
import { TitledRadioGroup } from "@/components/radio/titled-radio-group";
import { QuestionnaireErrorBox } from "../questionnaire-error-box";

export default function Histories3() {
  const n3 = useQuestionStore((state) => state.n3);
  const setN3 = useQuestionStore((state) => state.setN3);

  function handleValueChange(value: InputValueType): void {
    if (value !== n3) 
      scrollById(questionIds.smoking.head);

    setN3(value as EHistoryN3);
  }

  return (
    <QuestionnaireErrorBox errorKeys={["history.n3"]}>
      <Description
        id={questionIds.history.n3}
        headmark="3"
        text="B형간염 바이러스 보유자입니까?"
      />
      <Grids>
        <TitledRadioGroup
          value={n3}
          title="기타(암포함)"
          datas={[
            { value: EHistoryN3.yes, text: "예" },
            { value: EHistoryN3.no, text: "아니오" },
            { value: EHistoryN3.doNotKnown, text: "모름" },
          ]}
          onChange={handleValueChange}
        />
      </Grids>
    </QuestionnaireErrorBox>
  );
}
