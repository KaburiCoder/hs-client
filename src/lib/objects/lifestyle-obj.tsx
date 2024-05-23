import { LsDrinkingState } from "@/stores/lifestyle/ls-drinking-store";
import { LsExerciseState } from "@/stores/lifestyle/ls-exercise-store";
import { LsNutritionState } from "@/stores/lifestyle/ls-nutrition-store";
import { LsOverweightState } from "@/stores/lifestyle/ls-overweight-store";
import { LsSmokingState } from "@/stores/lifestyle/ls-smoking-store";

export const lsYnItems = {
  "1": "예",
  "2": "아니오",
};

export const lifestyleIds = {
  exercise: (id: keyof LsExerciseState) => `exercise_${id}`,
  drinking: (id: keyof LsDrinkingState) => `drinking_${id}`,
  nutrition: (id: keyof LsNutritionState) => `nutrition_${id}`,
  smoking: (id: keyof LsSmokingState) => `smoking_${id}`,
  overweight: (id: keyof LsOverweightState) => `overweight_${id}`,
};
