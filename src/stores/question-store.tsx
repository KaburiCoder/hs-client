import { create } from "zustand";
import { IHistory, IHistoryN1 } from "./interfaces/history";
import { ISmoking } from "./interfaces/smoking";

type QuestionStates = {
  n1: IHistoryN1;

  history: IHistory | null;
  smoking: ISmoking | null;
  bool: boolean;
};

type Actions = {
  setN1: (n1: IHistoryN1) => void;
  setHistory: (history: IHistory) => void;
  setSmoking: (smoking: ISmoking) => void;
  setBool: (bool: boolean) => void;
};

const initialState: QuestionStates = {
  n1: {},
  history: null,
  smoking: null,
  bool: false,
};

export const useQuestionStore = create<QuestionStates & Actions>((set) => ({
  ...initialState,
  setN1: (n1) => set(() => ({ n1 })),
  setHistory: (history) => set(() => ({ history })),
  setSmoking: (smoking) => set(() => ({ smoking })),
  setBool: (bool) => set(() => ({ bool })),
}));
