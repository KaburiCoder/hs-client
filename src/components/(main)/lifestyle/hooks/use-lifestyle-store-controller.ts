import React from 'react'
import { useLsDrinkingStore } from '@/stores/lifestyle/ls-drinking-store';
import { useLsErrorStore } from '@/stores/lifestyle/ls-error-store';
import { useLsExerciseStore } from '@/stores/lifestyle/ls-exercise-store';
import { useLsNutritionStore } from '@/stores/lifestyle/ls-nutrition-store';
import { useLsOverweightStore } from '@/stores/lifestyle/ls-overweight-store';
import { useLsSmokingStore } from '@/stores/lifestyle/ls-smoking-store';
import { LifestyleKeys, useLsSelectionStore } from '@/stores/lifestyle/ls-selection-store';

export const useLifestyleStoreController = () => {
  const validateSmoking = useLsSmokingStore((state) => state.validate);
  const validateDrinking = useLsDrinkingStore((state) => state.validate);
  const validateExercise = useLsExerciseStore((state) => state.validate);
  const validateNutrition = useLsNutritionStore((state) => state.validate);
  const validateOverweight = useLsOverweightStore((state) => state.validate);
  const clearSmoking = useLsSmokingStore((state) => state.clear);
  const clearDrinking = useLsDrinkingStore((state) => state.clear);
  const clearExercise = useLsExerciseStore((state) => state.clear);
  const clearNutrition = useLsNutritionStore((state) => state.clear);
  const clearOverweight = useLsOverweightStore((state) => state.clear);
  const setError = useLsErrorStore((state) => state.setError);
  const clearError = useLsErrorStore((state) => state.clearError);
  const clearSelectedItems = useLsSelectionStore(state => state.clearSelectedItems)
  const selectedItems = useLsSelectionStore(state => state.selectedItems)

  function clearAll() {
    clearSmoking();
    clearDrinking();
    clearExercise();
    clearNutrition();
    clearOverweight();
    clearError();
    clearSelectedItems();
  }

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
    clearAll,
  }
}
