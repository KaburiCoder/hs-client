import { Description } from "@/components/Description";
import React, { memo } from "react";
import { SmokingTermGroup } from "./smoking-term-group";
import {
  ISmokingResult,
  ISmokingTerm,
} from "health-screening-shared/interfaces";
import { InputValueType } from "kbr-nextjs-shared/types";
import { StretchedRadioGroup } from "@/components/radio/StrectchedRadioGroup";
import { convertBoolToInt } from "@/lib/utils/convert.util";
import { QuestionnaireErrorBox } from "../questionnaire-error-box";
import { QuestionnaireErrorResult } from "@/stores/questionnaire/question-error-store";
interface GroupDescription {
  headmark: string;
  text: string;
}
interface Props {
  firstDescription: GroupDescription;
  secondDescription: GroupDescription;
  onSmokingYnChange(value: InputValueType): void;
  value?: {
    yn?: boolean;
    result?: ISmokingResult;
  };
  id?: string;
  groupId?: string;
  ynErrorKeys: (keyof QuestionnaireErrorResult)[];
  subErrorKeys: (keyof QuestionnaireErrorResult)[];
  onTermYnChange: (yn: boolean) => void;
  onTermChange: (term: keyof ISmokingTerm, value: number | undefined) => void;
}

function SmokingGroup({
  value,
  id,
  groupId,
  firstDescription,
  secondDescription,
  ynErrorKeys,
  subErrorKeys,
  onTermYnChange,
  onTermChange,
  onSmokingYnChange,
}: Props) {
  return (
    <>
      <Description
        id={id}
        headmark={firstDescription.headmark}
        text={firstDescription.text}
      />
      <QuestionnaireErrorBox errorKeys={ynErrorKeys}>
        <StretchedRadioGroup
          value={convertBoolToInt(value?.yn)}
          datas={[
            { text: "예", value: 1 },
            { text: "아니오", value: 0 },
          ]}
          onChange={onSmokingYnChange}
        />
      </QuestionnaireErrorBox>

      <QuestionnaireErrorBox errorKeys={subErrorKeys}>
        <SmokingTermGroup
          id={groupId}
          value={{ yn: value?.result?.smoking, term: value?.result?.term }}
          blur={!value?.yn}
          description={{
            headmark: secondDescription.headmark,
            text: secondDescription.text,
          }}
          onTermYnChange={onTermYnChange}
          onTermChange={onTermChange}
        />
      </QuestionnaireErrorBox>
    </>
  );
}

export default memo(SmokingGroup);
