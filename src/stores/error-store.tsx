import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { LsDrinkingState } from "./lifestyle/ls-drinking-store";
import { LsExerciseState } from "./lifestyle/ls-exercise-store";
import { LsNutritionState } from "./lifestyle/ls-nutrition-store";
import { LsOverweightState } from "./lifestyle/ls-overweight-store";
import { LsSmokingState } from "./lifestyle/ls-smoking-store";
import { LifestyleKeys, QnKeys } from "./condition-store";

type ObjectType = { [key: string]: string };

interface State {
  selectedKey?: QnKeys | LifestyleKeys;
  error?: ObjectType;
}

interface Actions {
  setError: (selectedKey: LifestyleKeys, error?: ObjectType) => void;
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

export const useErrorStore = create(devtools(stateCreator));
