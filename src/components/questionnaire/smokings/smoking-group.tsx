import { Description } from "@/components/description";
import React, { memo } from "react";
import { SmokingTermGroup } from "./smoking-term-group";
import { ISmokingResult } from "health-screening-shared/interfaces";
import { InputValueType } from "kbr-nextjs-shared/types";
import { StretchedRadioGroup } from "@/components/radio/strectched-radio-group";
import { convertBoolToInt } from "@/lib/utils/convert.util";
import { QuestionnaireErrorBox } from "../questionnaire-error-box";
import { QuestionnaireErrorResult } from "@/stores/question-error-store";

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
  groupId?: string;
  ynErrorKeys: (keyof QuestionnaireErrorResult)[];
  subErrorKeys: (keyof QuestionnaireErrorResult)[];
}

function SmokingGroup({
  value,
  id,
  groupId,
  firstDescription,
  secondDescription,
  ynErrorKeys,
  subErrorKeys,
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
      <QuestionnaireErrorBox errorKeys={ynErrorKeys}>
        <StretchedRadioGroup
          value={convertBoolToInt(value?.yn)}
          datas={[
            { text: "예", value: 1 },
            { text: "아니오", value: 0 },
          ]}
          onChange={handleSmokingYnChange}
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
          onChange={handleSmokingTermChange}
        />
      </QuestionnaireErrorBox>
    </>
  );
}

export default memo(SmokingGroup);
