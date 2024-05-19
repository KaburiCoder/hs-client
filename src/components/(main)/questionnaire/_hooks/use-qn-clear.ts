import { useConditionStore } from "@/stores/condition-store";
import { useQuestionErrorStore } from "@/stores/question-error-store";
import { useQuestionStore } from "@/stores/question-store";
import { useEffect } from "react";

export const useQnClear = () => {
  const clearQuestionnaire = useQuestionStore((state) => state.clearQuestionnaire)
  const clearError = useQuestionErrorStore((state) => state.clearError);
  const clear = useConditionStore((state) => state.clear);

  useEffect(() => {
    return () => {
      clear();
      clearQuestionnaire();
      clearError();
    }
  })
}