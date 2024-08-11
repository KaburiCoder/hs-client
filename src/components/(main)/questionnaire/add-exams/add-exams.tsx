import { Description } from "@/components/Description";
import { StretchedRadioGroup } from "@/components/radio/StrectchedRadioGroup";
import { Title } from "@/components/Title";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import { convertBoolToInt } from "@/lib/utils/convert.util";
import { useConditionStore } from "@/stores/condition-store";
import React from "react";
import { QuestionnaireErrorBox } from "../questionnaire-error-box";
import { QuestionnaireErrorResult } from "@/stores/questionnaire/question-error-store";
import { scrollById } from "@/lib/utils/scroll.util";
import { useQuestionStore } from "@/stores/questionnaire/question-store";

export default function AddExams() {
  const isEldery = useConditionStore(state => state.isEldery())
  const {
    n11,
    n12,
    n13_1,
    n13_2,
    n13_3,
    n13_4,
    n13_5,
    n13_6,
    n14,
    n15,
    setN11,
    setN12,
    setN13_1,
    setN13_2,
    setN13_3,
    setN13_4,
    setN13_5,
    setN13_6,
    setN14,
    setN15,
  } = useQuestionStore();

  function handleChange(
    stateValue: boolean | undefined,
    setValue: (value?: boolean) => void,
    scrollTargetId: string,
    value: boolean | undefined,
  ) {
    setValue(value);

    if (value !== stateValue) scrollById(scrollTargetId);
  }

  if (!isEldery) return <></>;

  return (
    <section>
      <Title id={questionIds.addExam.head}>노인신체기능 평가</Title>

      <YnBox
        id={questionIds.addExam.n11}
        errorKey="addExam.n11"
        headmark="11"
        text="인플루엔자(독감) 예방접종을 매년 하십니까?"
        value={n11}
        onChange={handleChange.bind(null, n11, setN11, questionIds.addExam.n12)}
      />

      <YnBox
        id={questionIds.addExam.n12}
        errorKey="addExam.n12"
        headmark="12"
        text="폐렴예방접종을 받으셨습니까?"
        value={n12}
        onChange={handleChange.bind(null, n12, setN12, questionIds.addExam.n13)}
      />

      <Description
        id={questionIds.addExam.n13}
        headmark={"13"}
        text={"다음은 일상생활 수행능력에 대한 질문입니다."}
      />

      <YnBox
        id={questionIds.addExam.n13_1}
        errorKey="addExam.n13_1"
        text="1) 음식을 차려주면 남의 도움 없이 혼자서 식사하십니까?"
        value={n13_1}
        onChange={handleChange.bind(
          null,
          n13_1,
          setN13_1,
          questionIds.addExam.n13_2,
        )}
      />

      <YnBox
        id={questionIds.addExam.n13_2}
        errorKey="addExam.n13_2"
        text="2) 옷을 챙겨 입을 때 남의 도움 없이 혼자서 하십니까?"
        value={n13_2}
        onChange={handleChange.bind(
          null,
          n13_2,
          setN13_2,
          questionIds.addExam.n13_3,
        )}
      />

      <YnBox
        id={questionIds.addExam.n13_3}
        errorKey="addExam.n13_3"
        text="3) 대소변을 보기 위해 화장실 출입할 때 남의 도움 없이 혼자서 하십니까?"
        value={n13_3}
        onChange={handleChange.bind(
          null,
          n13_3,
          setN13_3,
          questionIds.addExam.n13_4,
        )}
      />

      <YnBox
        id={questionIds.addExam.n13_4}
        errorKey="addExam.n13_4"
        text="4) 목욕하실 때 남의 도움 없이 혼자서 하십니까?"
        value={n13_4}
        onChange={handleChange.bind(
          null,
          n13_4,
          setN13_4,
          questionIds.addExam.n13_5,
        )}
      />

      <YnBox
        id={questionIds.addExam.n13_5}
        errorKey="addExam.n13_5"
        text="5) 식사 준비를 다른 사람의 도움 없이 혼자서 하십니까?"
        value={n13_5}
        onChange={handleChange.bind(
          null,
          n13_5,
          setN13_5,
          questionIds.addExam.n13_6,
        )}
      />

      <YnBox
        id={questionIds.addExam.n13_6}
        errorKey="addExam.n13_6"
        text="6) 상점, 이웃, 병원, 관공서 등 걸어서 갔다 올 수 있는 곳의 외출을 다른 사람의 도움 없이 혼자서 하십니까?"
        value={n13_6}
        onChange={handleChange.bind(
          null,
          n13_6,
          setN13_6,
          questionIds.addExam.n14,
        )}
      />

      <YnBox
        id={questionIds.addExam.n14}
        errorKey="addExam.n14"
        headmark="14"
        text="낙상에 관한 질문입니다. 지난 6개월간 넘어진 적이 있습니까?"
        value={n14}
        onChange={handleChange.bind(null, n14, setN14, questionIds.addExam.n15)}
      />

      <YnBox
        id={questionIds.addExam.n15}
        errorKey="addExam.n15"
        headmark="15"
        text="배뇨장애에 관한 질문입니다. 소변을 보는 데 장애가 있거나 소변을 지릴 경우가 있습니까?"
        value={n15}
        onChange={handleChange.bind(null, n15, setN15, questionIds.confirm)}
      />
    </section>
  );
}

interface YnBoxProps {
  id: string;
  text: string;
  value: boolean | undefined;
  errorKey: keyof QuestionnaireErrorResult;
  headmark?: string;
  onChange?: (value: boolean) => void;
}

function YnBox({ id, text, value, errorKey, headmark, onChange }: YnBoxProps) {
  return (
    <QuestionnaireErrorBox errorKeys={[errorKey]}>
      <Description
        id={id}
        className={headmark ? "" : "px-8"}
        headmark={headmark}
        text={text}
      />
      <StretchedRadioGroup
        className={headmark ? "" : "pl-8"}
        value={convertBoolToInt(value)}
        datas={[
          { text: "예", value: 1 },
          { text: "아니오", value: 0 },
        ]}
        onChange={(v) => {
          onChange?.(!!v);
        }}
      />
    </QuestionnaireErrorBox>
  );
}
