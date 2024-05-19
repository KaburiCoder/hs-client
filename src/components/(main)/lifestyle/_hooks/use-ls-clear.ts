'use client'
import { useConditionStore } from "@/stores/condition-store";
import { useLsDrinkingStore } from "@/stores/lifestyle/ls-drinking-store";
import { useLsErrorStore } from "@/stores/lifestyle/ls-error-store";
import { useLsExerciseStore } from "@/stores/lifestyle/ls-exercise-store";
import { useLsNutritionStore } from "@/stores/lifestyle/ls-nutrition-store";
import { useLsOverweightStore } from "@/stores/lifestyle/ls-overweight-store";
import { useLsSmokingStore } from "@/stores/lifestyle/ls-smoking-store";
import { useEffect } from "react";

export const useLsClear = () => {
  const clearSmoking = useLsSmokingStore((state) => state.clear);
  const clearDrinking = useLsDrinkingStore((state) => state.clear);
  const clearExercise = useLsExerciseStore((state) => state.clear);
  const clearNutrition = useLsNutritionStore((state) => state.clear);
  const clearOverweight = useLsOverweightStore((state) => state.clear);
  const clearError = useLsErrorStore((state) => state.clearError);
  const clear = useConditionStore(state => state.clear)

  function clearAll() {
    clear();
    clearSmoking();
    clearDrinking();
    clearExercise();
    clearNutrition();
    clearOverweight();
    clearError();
  }

  useEffect(() => {
    return () => {
      clearAll();
    };
  }, []);
}