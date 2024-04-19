import { Description } from "@/components/description";
import { StretchedRadioGroup } from "@/components/radio";
import React from "react";
import { SmokingTermGroup } from "./smoking-term-group";
import { ISmokingResult } from "@/stores/interfaces/smoking";
import { InputValueType } from "kbr-nextjs-shared/types";

interface GroupDescription {
  headmark: string;
  text: string;
}
interface Props {
  blur: boolean;
  firstDescription: GroupDescription;
  secondDescription: GroupDescription;
  handleSmokingTermChange(result: ISmokingResult): void;
  handleSmokingYnChange(value: InputValueType): void;
}

export default function SmokingGroup({
  blur,
  firstDescription,
  secondDescription,
  handleSmokingTermChange,
  handleSmokingYnChange,
}: Props) {
  return (
    <>
      <Description
        headmark={firstDescription.headmark}
        text={firstDescription.text}
      />
      <StretchedRadioGroup
        datas={[
          { text: "예", value: 1 },
          { text: "아니오", value: 0 },
        ]}
        onChange={handleSmokingYnChange}
      />

      <SmokingTermGroup
        blur={blur}
        description={{
          headmark: secondDescription.headmark,
          text: secondDescription.text,
        }}
        onChange={handleSmokingTermChange}
      />
    </>
  );
}
