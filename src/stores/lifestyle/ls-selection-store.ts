import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

export type LifestyleKeys =
  | "smoking"
  | "drinking"
  | "exercise"
  | "nutrition"
  | "overweight";

interface State {
  selectedItems: LifestyleKeys[];
}

interface Actions {
  setSelectedItems: (selectedItems: LifestyleKeys[]) => void;
  clearSelectedItems: () => void;
}

const initialState: State = {
  selectedItems: [],
};

const stateCreator: StateCreator<State & Actions> = (set) => ({
  ...initialState,
  setSelectedItems: (selectedItems) => set(() => ({ selectedItems })),
  clearSelectedItems: () => set(initialState),
});

export const useLsSelectionStore = create(devtools(stateCreator));
