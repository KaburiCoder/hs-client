import { Description } from "@/components/description";
import { StretchedRadioGroup } from "@/components/radio";
import React from "react";

export default function Smokings6() {
  return (
    <>
      <Description
        headmark="6"
        text="액상형 전자담배를 사용한 경험이 있습니까?"
      />
      <StretchedRadioGroup
        datas={[
          { text: "예", value: "y" },
          { text: "아니오", value: "n" },
        ]}
      />

      <Description
        headmark="6-1"
        text="최근 한 달 동안 액상형 전자담배를 사용한 경험이 있습니까?"
      />
      <StretchedRadioGroup
        datas={[
          { text: "아니오", value: "n" },
          { text: "월 1~2일", value: "n1" },
          { text: "월 3~9일", value: "n2" },
          { text: "월 10~29일", value: "n3" },
          { text: "매일", value: "n4" },
        ]}
      />
    </>
  );
}
