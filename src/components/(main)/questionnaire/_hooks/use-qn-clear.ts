import { useConditionStore } from "@/stores/condition-store";
import { useQuestionErrorStore } from "@/stores/questionnaire/question-error-store";
import { useQuestionStore } from "@/stores/questionnaire/question-store";

export const useQnClear = () => {
  const clearQuestionnaire = useQuestionStore((state) => state.clearQuestionnaire)
  const clearError = useQuestionErrorStore((state) => state.clearError);
  const clearCondition = useConditionStore((state) => state.clear);

  function clear() {
    clearCondition();
    clearQuestionnaire();
    clearError();
  }

  return { clear };
}