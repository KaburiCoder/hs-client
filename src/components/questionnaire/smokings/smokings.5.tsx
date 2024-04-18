import React from "react";
import { Description } from "@/components/description";
import SmokingTerm from "./smoking-term";
import { StretchedRadioGroup } from "@/components/radio";

export default function Smokings5() {
  return (
    <>
      <StretchedRadioGroup
        title="지금까지 궐련형 전자담배(가열담배, 예)아이코스, 글로,
        릴 등)을 피운 적 있습니까?"
        datas={[
          { text: "예", value: "y" },
          { text: "아니오", value: "n" },
        ]}
      />

      <StretchedRadioGroup
        title="현재 궐련형 전자담배(가열담배) 피우십니까?"
        datas={[
          { text: "현재 피움", value: "y" },
          { text: "과거에는 피웠으나 현재 피우지 않음", value: "n" },
        ]}
      />
      <SmokingTerm quitNow />
    </>
  );
}
