import React, { useEffect, useRef, useState } from "react";
import { Description } from "@/components/Description";
import { Grids } from "@/components/Grids";
import { BtnCheckBox } from "@/components/BtnCheckbox";
import { IHistoryN1Result } from "health-screening-shared/interfaces";
import { useQuestionStore } from "@/stores/questionnaire/question-store";
import { useNotAppli } from "./use-not-appli";
import { n1ObjectList, questionIds } from "@/lib/objects/questionnaire-obj";

export const Histories1 = () => {
  const { clearToggle, setAppliChecked, NotAppliWrapper } = useNotAppli({
    scrollId: questionIds.history.n2,
  });
  const n1 = useQuestionStore((state) => state.n1);
  const setN1 = useQuestionStore((state) => state.setN1);

  useEffect(() => {
    if(clearToggle === null) return;
    setN1({});
  }, [clearToggle]);

  function handleChange(isDiag: boolean, key: string, value: boolean): void {
    if (value) setAppliChecked(false);
    const n1Data = {
      [key]: {
        diagnosis: isDiag ? value : n1[key]?.diagnosis,
        drugTherapy: isDiag ? n1[key]?.drugTherapy : value,
      },
    };

    setN1({
      ...n1,
      ...n1Data,
    });
  }

  return (
    <>
      <NotAppliWrapper>
        <Description
          headmark="1"
          text="다음과 같은 질병으로 진단을 받았거나, 현재 약물 치료 중이십니까?"
        />
      </NotAppliWrapper>

      <Grids>
        {n1ObjectList.map(({ key, title }) => (
          <CheckBoxes
            value={n1[key]}
            key={key}
            title={title}
            onDiagnosisChange={handleChange.bind(null, true, key)}
            onDrugTherapyChange={handleChange.bind(null, false, key)}
          />
        ))}
      </Grids>
    </>
  );
};

interface CheckBoxesProps {
  title: string;
  value: IHistoryN1Result | undefined;
  onDiagnosisChange: (value: boolean) => void;
  onDrugTherapyChange: (value: boolean) => void;
}

export function CheckBoxes({
  value,
  title,
  onDiagnosisChange,
  onDrugTherapyChange,
}: CheckBoxesProps) {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-2">
      <h3 className="text-lg">{title}</h3>
      <div className="flex gap-2">
        <BtnCheckBox
          text="진단"
          checked={value?.diagnosis ?? false}
          onCheckChange={onDiagnosisChange}
        />
        <BtnCheckBox
          text="약물치료"
          checked={value?.drugTherapy ?? false}
          onCheckChange={onDrugTherapyChange}
        />
      </div>
    </div>
  );
}
