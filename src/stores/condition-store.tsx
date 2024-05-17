import { create } from "zustand";

type LifeStyleType =
  | "smoking"
  | "drinking"
  | "exercise"
  | "nutrition"
  | "overweight";

interface States {
  isAddExam?: boolean;
  lifestyles?: LifeStyleType[];
}

interface Actions {
  setIsAddExam: (isAddExam?: boolean) => void;
  setLifeStyle: (lifestyles?: LifeStyleType[]) => void;
  clear: () => void;
}

const initialState: States = {
  isAddExam: false,
  lifestyles: undefined,
};

export const useConditionStore = create<States & Actions>((set) => ({
  ...initialState,
  setIsAddExam: (isAddExam) => set(() => ({ isAddExam })),
  setLifeStyle: (lifestyles) => set(() => ({ lifestyles })),
  clear: () => set(initialState),
}));
