import React, { useState } from "react";
import { Description } from "@/components/description";
import { Grids } from "@/components/grids";
import { TitledRadioGroup } from "@/components/radio";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import { EHistoryN3 } from "@/stores/interfaces/history";
import { useQuestion } from "@/lib/hooks/use-question";
import { scrollById } from "@/lib/utils/scroll.util";
import { InputValueType } from "kbr-nextjs-shared/types";

export default function Histories3() {
  const [n3, setN3] = useState<EHistoryN3>();
  useQuestion({ n3 });
  function handleValueChange(value: InputValueType): void {
    scrollById(questionIds.smoke.head)
    setN3(value as EHistoryN3);
  }

  return (
    <>
      <Description
        id={questionIds.history.n3}
        headmark="3"
        text="B형간염 바이러스 보유자입니까?"
      />
      <Grids>
        <TitledRadioGroup
          title="기타(암포함)"
          datas={[
            { value: EHistoryN3.yes, text: "예" },
            { value: EHistoryN3.no, text: "아니오" },
            { value: EHistoryN3.doNotKnown, text: "모름" },
          ]}
          onChange={handleValueChange}
        />
      </Grids>
    </>
  );
}
