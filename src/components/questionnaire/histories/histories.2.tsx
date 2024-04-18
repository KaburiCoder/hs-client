import React from "react";
import { Description } from "@/components/description";
import { Grids } from "@/components/grids";
import { TitledRadioGroup } from "@/components/radio";

export default function Histories2() {
  return (
    <>
      <Description
        text="부모, 형제, 자매 중에 다음 질환을 앓았거나 해당 질환으로
사망한 경우가 있으십니까?"
      />

      <Grids>
        <TitledRadioGroup
          title="뇌졸증(중풍)"
          datas={[
            { value: "y", text: "예" },
            { value: "n", text: "아니오" },
          ]}
        />
        <TitledRadioGroup
          title="심근경색/협심증"
          datas={[
            { value: "y", text: "예" },
            { value: "n", text: "아니오" },
          ]}
        />
        <TitledRadioGroup
          title="고혈압"
          datas={[
            { value: "y", text: "예" },
            { value: "n", text: "아니오" },
          ]}
        />
        <TitledRadioGroup
          title="당뇨병"
          datas={[
            { value: "y", text: "예" },
            { value: "n", text: "아니오" },
          ]}
        />{" "}
        <TitledRadioGroup
          title="기타(암포함)"
          datas={[
            { value: "y", text: "예" },
            { value: "n", text: "아니오" },
          ]}
        />
      </Grids>
    </>
  );
}
