import React from "react";
import { Description } from "@/components/description";
import { Grids } from "@/components/grids";
import { BtnCheckBoxes } from "../../btn-checkboxes";

export default function Histories1() {
  return (
    <>
      <Description text="다음과 같은 질병으로 진단을 받았거나, 현재 약물 치료 중이십니까?" />
      <Grids>
        <BtnCheckBoxes title="뇌졸증(중풍)" />
        <BtnCheckBoxes title="심근경색/협심증" />
        <BtnCheckBoxes title="고혈압" />
        <BtnCheckBoxes title="당뇨병" />
        <BtnCheckBoxes title="이상지질혈증" />
        <BtnCheckBoxes title="폐결핵" />
        <BtnCheckBoxes title="기타(암포함)" />
      </Grids>
    </>
  );
}
