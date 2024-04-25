import { StateCreator, create } from "zustand";
import { EHistoryN3, IHistoryN1, IHistoryN2 } from "health-src-shared";
import { ISmokingN6d1, ISmokingResult } from "../lib/interfaces/smoking";
import {
  EDrinkingFreqType,
  IDrinkN7,
  IDrinkingKind,
} from "../lib/interfaces/drink";
import { IActivityTerm } from "../lib/interfaces/activity";
import { devtools } from "zustand/middleware";

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
  n7?: IDrinkN7;
  n7_1?: IDrinkingKind;
  n7_2?: IDrinkingKind;
  n8_1?: number;
  n8_2?: IActivityTerm;
  n9_1?: number;
  n9_2?: IActivityTerm;
  n10?: number;
};

type Actions = {
  setN1: (n1: IHistoryN1) => void;
  setN2: (n2: IHistoryN2) => void;
  setN3: (n3?: EHistoryN3) => void;
  setN4: (n4?: boolean) => void;
  setN4_1: (n4_1?: ISmokingResult) => void;
  setN5: (n5?: boolean) => void;
  setN5_1: (n5_1?: ISmokingResult) => void;
  setN6: (n6?: boolean) => void;
  setN6_1: (n6_1?: ISmokingN6d1) => void;
  setN7: (n7?: IDrinkN7) => void;
  setN7_1: (n7_1?: IDrinkingKind) => void;
  setN7_2: (n7_2?: IDrinkingKind) => void;
  setN8_1: (n8_1?: number) => void;
  setN8_2: (n8_2?: IActivityTerm) => void;
  setN9_1: (n9_1?: number) => void;
  setN9_2: (n9_2?: IActivityTerm) => void;
  setN10: (n10?: number) => void;
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
  n7: undefined,
  n7_1: undefined,
  n7_2: undefined,
  n8_1: undefined,
  n8_2: undefined,
  n9_1: undefined,
  n9_2: undefined,
  n10: undefined,
};

const stateCreator: StateCreator<QuestionStates & Actions> = (set) => ({
  ...initialState,
  setN1: (n1) => set(() => ({ n1 })),
  setN2: (n2) => set(() => ({ n2 })),
  setN3: (n3) => set(() => ({ n3 })),
  setN4: (n4) =>
    set(({ n4_1 }) => {
      return { n4, n4_1: n4 ? n4_1 : undefined };
    }),
  setN4_1: (n4_1) => set(() => ({ n4_1 })),
  setN5: (n5) =>
    set(({ n5_1 }) => {
      return { n5, n5_1: n5 ? n5_1 : undefined };
    }),
  setN5_1: (n5_1) => set(() => ({ n5_1 })),
  setN6: (n6) => set(({ n6_1 }) => ({ n6, n6_1: n6 ? n6_1 : undefined })),
  setN6_1: (n6_1) => set(() => ({ n6_1 })),
  setN7: (n7) =>
    set(({ n7_1, n7_2 }) => ({
      n7,
      n7_1: !n7 || n7.type === EDrinkingFreqType.DO_NOT ? undefined : n7_1,
      n7_2: !n7 || n7.type === EDrinkingFreqType.DO_NOT ? undefined : n7_2,
    })),
  setN7_1: (n7_1) => set(() => ({ n7_1 })),
  setN7_2: (n7_2) => set(() => ({ n7_2 })),
  setN8_1: (n8_1) => set(() => ({ n8_1 })),
  setN8_2: (n8_2) => set(() => ({ n8_2 })),
  setN9_1: (n9_1) => set(() => ({ n9_1 })),
  setN9_2: (n9_2) => set(() => ({ n9_2 })),
  setN10: (n10) => set(() => ({ n10 })),
});

export const useQuestionStore = create(devtools(stateCreator));
