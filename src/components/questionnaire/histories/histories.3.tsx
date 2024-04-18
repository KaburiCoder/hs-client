import React from "react";
import { Description } from "@/components/description";
import { Grids } from "@/components/grids";
import { TitledRadioGroup } from "@/components/radio";

export default function Histories3() {
  return (
    <>
      <Description text="B형간염 바이러스 보유자입니까?" />
      <Grids>
        <TitledRadioGroup
          title="기타(암포함)"
          datas={[
            { value: "y", text: "예" },
            { value: "n", text: "아니오" },
            { value: "?", text: "모름" },
          ]}
        />
      </Grids>
    </>
  );
}
