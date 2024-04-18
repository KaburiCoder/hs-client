import React from "react";
import { Description } from "@/components/description";
import SmokingTerm from "./smoking-term";
import { StretchedRadioGroup } from "@/components/radio";

export default function Smokings4() {
  return (
    <>
      <StretchedRadioGroup
        title="지금까지 평생 총 5갑(100개비) 이상의 일반담배(궐련)를
        피운 적이 있습니까?"
        datas={[
          { text: "예", value: "y" },
          { text: "아니오", value: "n" },
        ]}
      />

      <StretchedRadioGroup
        title="현재 일반담배(궐련)을 피우십니까?"
        datas={[
          { text: "현재 피움", value: "y" },
          { text: "과거에는 피웠으나 현재 피우지 않음", value: "n" },
        ]}
      />
      <SmokingTerm quitNow />
    </>
  );
}
