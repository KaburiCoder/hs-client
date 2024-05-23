import { StateCreator, create } from "zustand";
import {
  EHistoryN3,
  IHistoryN1,
  IHistoryN2,
  EDrinkingFreqType,
  IDrinkN7,
  IDrinkingKind,
  IActivityTerm,
  IQuestionnaire,
} from "health-screening-shared/interfaces";
import {
  ISmokingN6d1,
  ISmokingResult,
} from "health-screening-shared/interfaces";
import { devtools } from "zustand/middleware";
import { deleteObject } from "@/lib/utils/object.util";
import { QuestionnaireSchema } from "health-screening-shared/joi";
import Joi from "joi";

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
  n11?: boolean;
  n12?: boolean;
  n13_1?: boolean;
  n13_2?: boolean;
  n13_3?: boolean;
  n13_4?: boolean;
  n13_5?: boolean;
  n13_6?: boolean;
  n14?: boolean;
  n15?: boolean;
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
  setN11: (n11?: boolean) => void;
  setN12: (n12?: boolean) => void;
  setN13_1: (n13_1?: boolean) => void;
  setN13_2: (n13_2?: boolean) => void;
  setN13_3: (n13_3?: boolean) => void;
  setN13_4: (n13_4?: boolean) => void;
  setN13_5: (n13_5?: boolean) => void;
  setN13_6: (n13_6?: boolean) => void;
  setN14: (n14?: boolean) => void;
  setN15: (n15?: boolean) => void;
  setGenState: (state: QuestionStates) => void;
  validate: (isEldery?: boolean) => Joi.ValidationResult<IQuestionnaire>;
  clearQuestionnaire: () => void;
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
  n11: undefined,
  n12: undefined,
  n13_1: undefined,
  n13_2: undefined,
  n13_3: undefined,
  n13_4: undefined,
  n13_5: undefined,
  n13_6: undefined,
  n14: undefined,
  n15: undefined,
};

const stateCreator: StateCreator<QuestionStates & Actions> = (set, get) => ({
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
  setN11: (n11) => set(() => ({ n11 })),
  setN12: (n12) => set(() => ({ n12 })),
  setN13_1: (n13_1) => set(() => ({ n13_1 })),
  setN13_2: (n13_2) => set(() => ({ n13_2 })),
  setN13_3: (n13_3) => set(() => ({ n13_3 })),
  setN13_4: (n13_4) => set(() => ({ n13_4 })),
  setN13_5: (n13_5) => set(() => ({ n13_5 })),
  setN13_6: (n13_6) => set(() => ({ n13_6 })),
  setN14: (n14) => set(() => ({ n14 })),
  setN15: (n15) => set(() => ({ n15 })),
  validate: (isEldery?: boolean) => {
    const {
      n1,
      n2,
      n3,
      n4,
      n4_1,
      n5,
      n5_1,
      n6,
      n6_1,
      n7,
      n7_1,
      n7_2,
      n8_1,
      n8_2,
      n9_1,
      n9_2,
      n10,
      n11,
      n12,
      n13_1,
      n13_2,
      n13_3,
      n13_4,
      n13_5,
      n13_6,
      n14,
      n15,
    } = get();

    return QuestionnaireSchema.validate({
      history: { n1, n2, n3 },
      smoking: { n4, n4_1, n5, n5_1, n6, n6_1 },
      drink: { n7, n7_1, n7_2 },
      activity: { n8_1, n8_2, n9_1, n9_2, n10 },
      addExam: isEldery
        ? { n11, n12, n13_1, n13_2, n13_3, n13_4, n13_5, n13_6, n14, n15 }
        : undefined,
      isAddExam: isEldery,
    });
  },
  setGenState: (state) =>
    set(() => {
      deleteObject(state, (value) => value === 0 || value === null);

      return {
        ...state,
        n4: state.n4,
        n4_1: state.n4 ? state.n4_1 : undefined,
        n5: state.n5,
        n5_1: state.n5 ? state.n5_1 : undefined,
        n6: state.n6,
        n6_1: state.n6 ? state.n6_1 : undefined,
        n7: {
          type: state.n7?.type,
          frequency:
            state.n7?.type === EDrinkingFreqType.DO_NOT
              ? undefined
              : state.n7?.frequency,
        },
        n7_1:
          !state.n7 || state.n7.type === EDrinkingFreqType.DO_NOT
            ? undefined
            : state.n7_1,
        n7_2:
          !state.n7 || state.n7.type === EDrinkingFreqType.DO_NOT
            ? undefined
            : state.n7_2,
      };
    }),
  clearQuestionnaire: () => set(initialState),
});

export const useQuestionStore = create(devtools(stateCreator));
