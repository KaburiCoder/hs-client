import { create } from "zustand";
import {
  EHistoryN3,
  IHistory,
  IHistoryN1,
  IHistoryN2,
} from "./interfaces/history";
import { ISmoking, ISmokingN6d1, ISmokingResult } from "./interfaces/smoking";

type QuestionStates = {
  n1: IHistoryN1;
  n2: IHistoryN2;
  n3: EHistoryN3 | undefined;
  n4?: boolean;
  n4_1?: ISmokingResult;
  n5?: boolean;
  n5_1?: ISmokingResult;
  n6?: boolean;
  n6_1?: ISmokingN6d1;
};

type Actions = {
  setN1: (n1: IHistoryN1) => void;
  setN2: (n2: IHistoryN2) => void;
  setN3: (n3: EHistoryN3) => void;
  setN4: (n4: boolean) => void;
  setN4_1: (n4_1: ISmokingResult) => void;
  setN5: (n5: boolean) => void;
  setN5_1: (n5_1: ISmokingResult) => void;
  setN6: (n6: boolean) => void;
  setN6_1: (n6_1: ISmokingN6d1) => void;
};

const initialState: QuestionStates = {
  n1: {},
  n2: {},
  n3: undefined,
  n4: undefined,
  n4_1: undefined,
  n5: undefined,
  n5_1: undefined,
  n6: undefined,
  n6_1: undefined,
};

export const useQuestionStore = create<QuestionStates & Actions>((set) => ({
  ...initialState,
  setN1: (n1) => set(() => ({ n1 })),
  setN2: (n2) => set(() => ({ n2 })),
  setN3: (n3) => set(() => ({ n3 })),
  setN4: (n4) => set(() => ({ n4 })),
  setN4_1: (n4_1) => set(() => ({ n4_1 })),
  setN5: (n5) => set(() => ({ n5 })),
  setN5_1: (n5_1) => set(() => ({ n5_1 })),
  setN6: (n6) => set(() => ({ n6 })),
  setN6_1: (n6_1) => set(() => ({ n6_1 })),
}));
