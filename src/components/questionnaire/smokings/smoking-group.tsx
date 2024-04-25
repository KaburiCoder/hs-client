import { Description } from "@/components/description";
import React from "react";
import { SmokingTermGroup } from "./smoking-term-group";
import { ISmokingResult } from "@/lib/interfaces/smoking";
import { InputValueType } from "kbr-nextjs-shared/types";
import { StretchedRadioGroup } from "@/components/radio/strectched-radio-group";
import { convertBoolToInt } from "@/lib/utils/convert.util";

interface GroupDescription {
  headmark: string;
  text: string;
}
interface Props {
  firstDescription: GroupDescription;
  secondDescription: GroupDescription;
  handleSmokingTermChange(result: ISmokingResult): void;
  handleSmokingYnChange(value: InputValueType): void;
  value?: {
    yn?: boolean;
    result?: ISmokingResult;
  };
  id?: string;
}

export default function SmokingGroup({
  value,
  id,
  firstDescription,
  secondDescription,
  handleSmokingTermChange,
  handleSmokingYnChange,
}: Props) {
  return (
    <>
      <Description
        id={id}
        headmark={firstDescription.headmark}
        text={firstDescription.text}
      />
      <StretchedRadioGroup
        value={convertBoolToInt(value?.yn)}
        datas={[
          { text: "예", value: 1 },
          { text: "아니오", value: 0 },
        ]}
        onChange={handleSmokingYnChange}
      />

      <SmokingTermGroup
        value={{ yn: value?.result?.smoking, term: value?.result?.term }}
        blur={!value?.yn}
        description={{
          headmark: secondDescription.headmark,
          text: secondDescription.text,
        }}
        onChange={handleSmokingTermChange}
      />
    </>
  );
}
