import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { LsDrinkingState } from "./ls-drinking-store";
import { LsExerciseState } from "./ls-exercise-store";
import { LsNutritionState } from "./ls-nutrition-store";
import { LsOverweightState } from "./ls-overweight-store";
import { LsSmokingState } from "./ls-smoking-store";
import { LifestyleKeys } from "@/components/(main)/lifestyle/lifestyle-body";

interface State {
  selectedKey?: LifestyleKeys;
  error?: LsErrorResult;
}

interface Actions {
  setError: (selectedKey: LifestyleKeys, error?: LsErrorResult) => void;
  clearError: () => void;
}

const initialState: State = {
  selectedKey: undefined,
  error: undefined,
};

const stateCreator: StateCreator<State & Actions> = (set) => ({
  ...initialState,
  setError: (selectedKey, error) => set(() => ({ selectedKey, error })),
  clearError: () => set(initialState),
});

export const useLsErrorStore = create(devtools(stateCreator));

type LsDrinkingType = { [key in keyof LsDrinkingState]: string };
type LsExerciseType = { [key in keyof LsExerciseState]: string };
type LsNutritionType = { [key in keyof LsNutritionState]: string };
type LsOverweightType = { [key in keyof LsOverweightState]: string };
type LsSmokingType = { [key in keyof LsSmokingState]: string };

export interface LsErrorResult
  extends Partial<LsDrinkingType>,
    Partial<LsExerciseType>,
    Partial<LsNutritionType>,
    Partial<LsOverweightType>,
    Partial<LsSmokingType> {}
