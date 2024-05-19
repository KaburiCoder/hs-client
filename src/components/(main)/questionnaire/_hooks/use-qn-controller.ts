import { useValidate } from "@/lib/hooks/use-validate";
import { questionIds } from "@/lib/objects/questionnaire-obj";
import { scrollById } from "@/lib/utils/scroll.util";
import { useConditionStore } from "@/stores/condition-store";
import { QuestionnaireErrorResult, useQuestionErrorStore } from "@/stores/question-error-store";
import { useQuestionStore } from "@/stores/question-store";
import { IQuestionnaire } from "health-screening-shared/interfaces";
import { QuestionnaireSchema } from "health-screening-shared/joi";

export const useQnStoreController = (error: QuestionnaireErrorResult) => {
  const setError = useQuestionErrorStore((state) => state.setError);
  const n1 = useQuestionStore((state) => state.n1);
  const n2 = useQuestionStore((state) => state.n2);
  const n3 = useQuestionStore((state) => state.n3);
  const n4 = useQuestionStore((state) => state.n4);
  const n4_1 = useQuestionStore((state) => state.n4_1);
  const n5 = useQuestionStore((state) => state.n5);
  const n5_1 = useQuestionStore((state) => state.n5_1);
  const n6 = useQuestionStore((state) => state.n6);
  const n6_1 = useQuestionStore((state) => state.n6_1);
  const n7 = useQuestionStore((state) => state.n7);
  const n7_1 = useQuestionStore((state) => state.n7_1);
  const n7_2 = useQuestionStore((state) => state.n7_2);
  const n8_1 = useQuestionStore((state) => state.n8_1);
  const n8_2 = useQuestionStore((state) => state.n8_2);
  const n9_1 = useQuestionStore((state) => state.n9_1);
  const n9_2 = useQuestionStore((state) => state.n9_2);
  const n10 = useQuestionStore((state) => state.n10);
  const n11 = useQuestionStore((state) => state.n11);
  const n12 = useQuestionStore((state) => state.n12);
  const n13_1 = useQuestionStore((state) => state.n13_1);
  const n13_2 = useQuestionStore((state) => state.n13_2);
  const n13_3 = useQuestionStore((state) => state.n13_3);
  const n13_4 = useQuestionStore((state) => state.n13_4);
  const n13_5 = useQuestionStore((state) => state.n13_5);
  const n13_6 = useQuestionStore((state) => state.n13_6);
  const n14 = useQuestionStore((state) => state.n14);
  const n15 = useQuestionStore((state) => state.n15);
  const { validateAndGetResult, validateError } = useValidate<any, QuestionnaireErrorResult>();
  const { isAddExam } = useConditionStore();
  const errorResult = validateError?.error ?? error;

  function validate() {
    return validateAndGetResult<IQuestionnaire>(QuestionnaireSchema, {
      history: { n1, n2, n3 },
      smoking: { n4, n4_1, n5, n5_1, n6, n6_1 },
      drink: { n7, n7_1, n7_2 },
      activity: { n8_1, n8_2, n9_1, n9_2, n10 },
      addExam: isAddExam ? { n11, n12, n13_1, n13_2, n13_3, n13_4, n13_5, n13_6, n14, n15 } : undefined,
      isAddExam,
    });
  }

  function errorToScroll({ key, key2, startsWith }: ErrorScrollArgs) {
    if (!errorResult) return;

    const findKey = Object.keys(errorResult)?.[0];
    const combinedKey = `${key}.${key2}`;
    if (
      (startsWith && findKey.startsWith(combinedKey)) ||
      findKey === combinedKey
    ) {
      scrollById((questionIds as any)[key][key2], 150);
      return true;
    }
  }

  function scrollToError() {
    for (const args of errorScrollDatas) {
      if (errorToScroll(args)) return;
    }
  }

  return {
    error: errorResult,
    scrollToError,
    validate,
    setError,
  }
}

interface ErrorScrollArgs {
  key: keyof typeof questionIds;
  key2:
  | keyof typeof questionIds.history
  | keyof typeof questionIds.drink
  | keyof typeof questionIds.smoking
  | keyof typeof questionIds.activity
  | keyof typeof questionIds.addExam;
  startsWith?: boolean;
}

const errorScrollDatas: ErrorScrollArgs[] = [
  { key: "history", key2: "n3" },
  { key: "smoking", key2: "n4" },
  { key: "smoking", key2: "n4_1", startsWith: true },
  { key: "smoking", key2: "n5" },
  { key: "smoking", key2: "n5_1", startsWith: true },
  { key: "smoking", key2: "n6" },
  { key: "smoking", key2: "n6_1" },
  { key: "drink", key2: "n7_1" },
  { key: "drink", key2: "n7_2" },
  { key: "drink", key2: "n7", startsWith: true },
  { key: "activity", key2: "n8_1" },
  { key: "activity", key2: "n8_2", startsWith: true },
  { key: "activity", key2: "n9_1" },
  { key: "activity", key2: "n9_2", startsWith: true },
  { key: "activity", key2: "n10" },
  { key: "addExam", key2: "n11" },
  { key: "addExam", key2: "n12" },
  { key: "addExam", key2: "n13_1" },
  { key: "addExam", key2: "n13_2" },
  { key: "addExam", key2: "n13_3" },
  { key: "addExam", key2: "n13_4" },
  { key: "addExam", key2: "n13_5" },
  { key: "addExam", key2: "n13_6" },
  { key: "addExam", key2: "n14" },
  { key: "addExam", key2: "n15" },
]