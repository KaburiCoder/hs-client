import { useConditionStore } from "@/stores/condition-store";
import { useQnCognitiveStore } from "@/stores/questionnaire/gn-cognitive-store";
import { useQnDepressionStore } from "@/stores/questionnaire/gn-depression-store";
import { useQuestionErrorStore } from "@/stores/questionnaire/question-error-store";
import { useQuestionStore } from "@/stores/questionnaire/question-store";

export const useQnClear = () => {
  const clearQuestionnaire = useQuestionStore((state) => state.clearQuestionnaire)
  const clearError = useQuestionErrorStore((state) => state.clearError);
  const clearCondition = useConditionStore((state) => state.clear);
  const clearCognitive = useQnCognitiveStore((state) => state.clear);
  const clearDepression = useQnDepressionStore((state) => state.clear);

  function clear() {
    clearCondition();
    clearQuestionnaire();
    clearError();
    clearCognitive();
    clearDepression();
  }

  return { clear };
}