import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

export type LifestyleKeys =
  | "smoking"
  | "drinking"
  | "exercise"
  | "nutrition"
  | "overweight";

interface State {
  isAddExam?: boolean;
  selectedLifestyles: LifestyleKeys[];
}
interface Actions {
  setIsAddExam: (isAddExam?: boolean) => void;
  setSelectedLifestyles: (selectedLifestyles?: LifestyleKeys[]) => void;
  clear: () => void;
}

const initialState: State = {
  isAddExam: false,
  selectedLifestyles: [],
};

const stateCreator: StateCreator<State & Actions> = (set) => ({
  ...initialState,
  setIsAddExam: (isAddExam) => set(() => ({ isAddExam })),
  setSelectedLifestyles: (selectedLifestyles) =>
    set(() => ({ selectedLifestyles })),
  clear: () => set(initialState),
});

export const useConditionStore = create(devtools(stateCreator));
