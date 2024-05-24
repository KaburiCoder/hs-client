import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

export type QnKeys = "gen" | "elderly" | "depression" | "cognitive";
export type LifestyleKeys =
  | "smoking"
  | "drinking"
  | "exercise"
  | "nutrition"
  | "overweight";

interface State {
  addList?: QnKeys[];
  selectedLifestyles: LifestyleKeys[];
}
interface Actions {
  setAddList: (addList?: QnKeys[]) => void;
  setSelectedLifestyles: (selectedLifestyles?: LifestyleKeys[]) => void;
  isEldery: () => boolean | undefined;
  clear: () => void;
}

const initialState: State = {
  addList: [],
  selectedLifestyles: [],
};

const stateCreator: StateCreator<State & Actions> = (set, get) => ({
  ...initialState,
  setAddList: (addList) => set(() => ({ addList })),
  setSelectedLifestyles: (selectedLifestyles) =>
    set(() => ({ selectedLifestyles })),
  isEldery: () => get().addList?.some((x) => x === "elderly"),
  clear: () => set(initialState),
});

export const useConditionStore = create(devtools(stateCreator));
