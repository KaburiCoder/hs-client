import React from 'react'
import { useLsDrinkingStore } from '@/stores/lifestyle/ls-drinking-store';
import { useLsErrorStore } from '@/stores/lifestyle/ls-error-store';
import { useLsExerciseStore } from '@/stores/lifestyle/ls-exercise-store';
import { useLsNutritionStore } from '@/stores/lifestyle/ls-nutrition-store';
import { useLsOverweightStore } from '@/stores/lifestyle/ls-overweight-store';
import { useLsSmokingStore } from '@/stores/lifestyle/ls-smoking-store';
import { LifestyleKeys, useConditionStore } from '@/stores/condition-store';

export const useLifestyleStoreController = () => {
  const validateSmoking = useLsSmokingStore((state) => state.validate);
  const validateDrinking = useLsDrinkingStore((state) => state.validate);
  const validateExercise = useLsExerciseStore((state) => state.validate);
  const validateNutrition = useLsNutritionStore((state) => state.validate);
  const validateOverweight = useLsOverweightStore((state) => state.validate);
  const clearError = useLsErrorStore((state) => state.clearError);
  const setError = useLsErrorStore((state) => state.setError);
  const selectedItems = useConditionStore(state => state.selectedLifestyles)

  function validate(selectedKey: LifestyleKeys) {
    switch (selectedKey) {
      case "drinking":
        return validateDrinking();
      case "smoking":
        return validateSmoking();
      case "exercise":
        return validateExercise();
      case "nutrition":
        return validateNutrition();
      case "overweight":
        return validateOverweight();
      default:
        throw new Error("Invalid selected key");
    }
  }

  return {
    selectedItems,
    validate,
    setError,
    clearError,
  }
}
