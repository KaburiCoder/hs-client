import React, { useEffect, useState } from "react";
import { Description } from "@/components/description";
import { Grids } from "@/components/grids";
import { n2ObjectList, questionIds } from "@/lib/objects/questionnaire-obj";
import { BtnCheckBox, BtnCheckBoxProps } from "@/components/btn-checkbox";
import { useNotAppli } from "./use-not-appli";
import { useQuestionStore } from "@/stores/questionnaire/question-store";

export default function Histories2() {
  const { clearToggle, setAppliChecked, NotAppliWrapper } = useNotAppli({
    scrollId: questionIds.history.n3,
  });
  const n2 = useQuestionStore((state) => state.n2);
  const setN2 = useQuestionStore((state) => state.setN2);

  console.log("n2");

  useEffect(() => {
    if (clearToggle === null) return;
    setN2({});
  }, [clearToggle]);

  function handleCheckChange(key: string, value: boolean): void {
    if (value) setAppliChecked(false);
    setN2({ ...n2, [key]: value });
  }

  const checkboxes = n2ObjectList.map(({ key, title }) => (
    <TitledBtnCheckGroup
      key={key}
      checked={(n2 && (n2 as { [key: string]: boolean })[key]) ?? false}
      title={title}
      onCheckChange={handleCheckChange.bind(null, key)}
    />
  ));

  return (
    <>
      <NotAppliWrapper id={questionIds.history.n2}>
        <Description
          headmark="2"
          text="부모, 형제, 자매 중에 다음 질환을 앓았거나 해당 질환으로 사망한 경우가 있으십니까?"
        />
      </NotAppliWrapper>
      <Grids>{checkboxes}</Grids>
    </>
  );
}

interface TitledBtnCheckGroupProps extends BtnCheckBoxProps {
  title: string;
}

function TitledBtnCheckGroup({ title, ...props }: TitledBtnCheckGroupProps) {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-2">
      <h3 className="text-lg">{title}</h3>
      <BtnCheckBox className="flex gap-2" showCheckIcon {...props} />
    </div>
  );
}
