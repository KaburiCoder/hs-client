import Joi from "joi";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { validateSchema } from "../utils/validate-utli";
import { inputMessage, selectMessage } from "./joi-messages";
import { deleteObject } from "@/lib/utils/object.util";

export interface LsExerciseState {
  n1_1: string | undefined;
  n1_2: number | undefined;
  n1_3h: number | undefined;
  n1_3m: number | undefined;
  n1_4: string | undefined;
  n1_5: number | undefined;
  n1_6h: number | undefined;
  n1_6m: number | undefined;
  n2_1: string | undefined;
  n2_2: number | undefined;
  n2_3h: number | undefined;
  n2_3m: number | undefined;
  n3_1: string | undefined;
  n3_2: number | undefined;
  n3_3h: number | undefined;
  n3_3m: number | undefined;
  n3_4: string | undefined;
  n3_5: number | undefined;
  n3_6h: number | undefined;
  n3_6m: number | undefined;
  n4_1h: number | undefined;
  n4_1m: number | undefined;
  n5: string | undefined;
  n6: string | undefined;
  n7: string | undefined;
  n8: string | undefined;
  n9: string | undefined;
  n10: string | undefined;
  n11: string | undefined;
  n12: string | undefined;
}

// Actions 인터페이스 정의
interface Actions {
  setN1_1: (n1_1: string | undefined) => void;
  setN1_2: (n1_2: number | undefined) => void;
  setN1_3h: (n1_3h: number | undefined) => void;
  setN1_3m: (n1_3m: number | undefined) => void;
  setN1_4: (n1_4: string | undefined) => void;
  setN1_5: (n1_5: number | undefined) => void;
  setN1_6h: (n1_6h: number | undefined) => void;
  setN1_6m: (n1_6m: number | undefined) => void;
  setN2_1: (n2_1: string | undefined) => void;
  setN2_2: (n2_2: number | undefined) => void;
  setN2_3h: (n2_3h: number | undefined) => void;
  setN2_3m: (n2_3m: number | undefined) => void;
  setN3_1: (n3_1: string | undefined) => void;
  setN3_2: (n3_2: number | undefined) => void;
  setN3_3h: (n3_3h: number | undefined) => void;
  setN3_3m: (n3_3m: number | undefined) => void;
  setN3_4: (n3_4: string | undefined) => void;
  setN3_5: (n3_5: number | undefined) => void;
  setN3_6h: (n3_6h: number | undefined) => void;
  setN3_6m: (n3_6m: number | undefined) => void;
  setN4_1h: (n4_1h: number | undefined) => void;
  setN4_1m: (n4_1m: number | undefined) => void;
  setN5: (n5: string | undefined) => void;
  setN6: (n6: string | undefined) => void;
  setN7: (n7: string | undefined) => void;
  setN8: (n8: string | undefined) => void;
  setN9: (n9: string | undefined) => void;
  setN10: (n10: string | undefined) => void;
  setN11: (n11: string | undefined) => void;
  setN12: (n12: string | undefined) => void;
  setState: (state: LsExerciseState) => void;
  validate: () => Joi.ValidationResult<LsExerciseState>;
  clear: () => void;
}

// 초기 상태 정의
const initialState: LsExerciseState = {
  n1_1: undefined,
  n1_2: undefined,
  n1_3h: undefined,
  n1_3m: undefined,
  n1_4: undefined,
  n1_5: undefined,
  n1_6h: undefined,
  n1_6m: undefined,
  n2_1: undefined,
  n2_2: undefined,
  n2_3h: undefined,
  n2_3m: undefined,
  n3_1: undefined,
  n3_2: undefined,
  n3_3h: undefined,
  n3_3m: undefined,
  n3_4: undefined,
  n3_5: undefined,
  n3_6h: undefined,
  n3_6m: undefined,
  n4_1h: undefined,
  n4_1m: undefined,
  n5: undefined,
  n6: undefined,
  n7: undefined,
  n8: undefined,
  n9: undefined,
  n10: undefined,
  n11: undefined,
  n12: undefined,
};

const test = {
  a: null,
  b: null,
  c: null,
};

const noToUndefiend = (yn: string | undefined, value: number | undefined) =>
  yn === "2" ? undefined : value;

const remakeGroupValue = (
  state: { [key: string]: any },
  ynValue: string | undefined,
  firstNum: number,
  secNum: number,
): any => {
  const ynKey = `n${firstNum}_${secNum}`;
  const dayKey = `n${firstNum}_${secNum + 1}`;
  const hourKey = `n${firstNum}_${secNum + 2}h`;
  const minuteKey = `n${firstNum}_${secNum + 2}m`;
  const result = {
    [ynKey]: ynValue,
    [dayKey]: noToUndefiend(ynValue, state[dayKey] as number),
    [hourKey]: noToUndefiend(ynValue, state[hourKey] as number),
    [minuteKey]: noToUndefiend(ynValue, state[minuteKey] as number),
  };
  return result;
};

const stateCreator: StateCreator<LsExerciseState & Actions> = (set, get) => ({
  ...initialState,
  setN1_1: (n1_1) => set((state) => remakeGroupValue(state, n1_1, 1, 1)),
  setN1_2: (n1_2) => set(() => ({ n1_2 })),
  setN1_3h: (n1_3h) => set(() => ({ n1_3h })),
  setN1_3m: (n1_3m) => set(() => ({ n1_3m })),
  setN1_4: (n1_4) => set((state) => remakeGroupValue(state, n1_4, 1, 4)),
  setN1_5: (n1_5) => set(() => ({ n1_5 })),
  setN1_6h: (n1_6h) => set(() => ({ n1_6h })),
  setN1_6m: (n1_6m) => set(() => ({ n1_6m })),
  setN2_1: (n2_1) => set((state) => remakeGroupValue(state, n2_1, 2, 1)),
  setN2_2: (n2_2) => set(() => ({ n2_2 })),
  setN2_3h: (n2_3h) => set(() => ({ n2_3h })),
  setN2_3m: (n2_3m) => set(() => ({ n2_3m })),
  setN3_1: (n3_1) => set((state) => remakeGroupValue(state, n3_1, 3, 1)),
  setN3_2: (n3_2) => set(() => ({ n3_2 })),
  setN3_3h: (n3_3h) => set(() => ({ n3_3h })),
  setN3_3m: (n3_3m) => set(() => ({ n3_3m })),
  setN3_4: (n3_4) => set((state) => remakeGroupValue(state, n3_4, 3, 4)),
  setN3_5: (n3_5) => set(() => ({ n3_5 })),
  setN3_6h: (n3_6h) => set(() => ({ n3_6h })),
  setN3_6m: (n3_6m) => set(() => ({ n3_6m })),
  setN4_1h: (n4_1h) => set(() => ({ n4_1h })),
  setN4_1m: (n4_1m) => set(() => ({ n4_1m })),
  setN5: (n5) => set(() => ({ n5 })),
  setN6: (n6) => set(() => ({ n6 })),
  setN7: (n7) => set(() => ({ n7 })),
  setN8: (n8) => set(() => ({ n8 })),
  setN9: (n9) => set(() => ({ n9 })),
  setN10: (n10) => set(() => ({ n10 })),
  setN11: (n11) => set(() => ({ n11 })),
  setN12: (n12) => set(() => ({ n12 })),
  setState: (state) =>
    set(() => {
      deleteObject(state, (value) => value === null);
      return { ...state };
    }),
  validate: () => validateSchema({ state: get(), initialState, schema }),
  clear: () => set(initialState),
});

export const useLsExerciseStore = create(devtools(stateCreator));

const schema = Joi.object<LsExerciseState>({
  n1_1: Joi.string().required().messages(selectMessage("1")),
  n1_2: Joi.number()
    .min(0)
    .max(7)
    .when("n1_1", {
      is: "1",
      then: Joi.required().messages(inputMessage("1-2")),
    }),
  n1_3h: Joi.number()
    .min(0)
    .max(23)
    .when("n1_1", {
      is: "1",
      then: Joi.required().messages(inputMessage("1-3", "시간")),
    }),
  n1_3m: Joi.number()
    .min(0)
    .max(59)
    .when("n1_1", {
      is: "1",
      then: Joi.required().messages(inputMessage("1-3", "분")),
    }),

  n1_4: Joi.string().required().messages(selectMessage("1-4")),
  n1_5: Joi.number()
    .min(0)
    .max(7)
    .when("n1_4", {
      is: "1",
      then: Joi.required().messages(inputMessage("1-5")),
    }),
  n1_6h: Joi.number()
    .min(0)
    .max(23)
    .when("n1_4", {
      is: "1",
      then: Joi.required().messages(inputMessage("1-6", "시간")),
    }),
  n1_6m: Joi.number()
    .min(0)
    .max(59)
    .when("n1_4", {
      is: "1",
      then: Joi.required().messages(inputMessage("1-6", "분")),
    }),

  n2_1: Joi.string().required().messages(selectMessage("2-1")),
  n2_2: Joi.number()
    .min(0)
    .max(7)
    .when("n2_1", {
      is: "1",
      then: Joi.required().messages(inputMessage("2-2")),
    }),
  n2_3h: Joi.number()
    .min(0)
    .max(23)
    .when("n2_1", {
      is: "1",
      then: Joi.required().messages(inputMessage("2-3", "시간")),
    }),
  n2_3m: Joi.number()
    .min(0)
    .max(59)
    .when("n2_1", {
      is: "1",
      then: Joi.required().messages(inputMessage("2-3", "분")),
    }),

  n3_1: Joi.string().required().messages(selectMessage("3-1")),
  n3_2: Joi.number()
    .min(0)
    .max(7)
    .when("n3_1", {
      is: "1",
      then: Joi.required().messages(inputMessage("3-2")),
    }),
  n3_3h: Joi.number()
    .min(0)
    .max(23)
    .when("n3_1", {
      is: "1",
      then: Joi.required().messages(inputMessage("3-3", "시간")),
    }),
  n3_3m: Joi.number()
    .min(0)
    .max(59)
    .when("n3_1", {
      is: "1",
      then: Joi.required().messages(inputMessage("3-3", "분")),
    }),

  n3_4: Joi.string().required().messages(selectMessage("3-4")),
  n3_5: Joi.number()
    .min(0)
    .max(7)
    .when("n3_4", {
      is: "1",
      then: Joi.required().messages(inputMessage("3-5")),
    }),
  n3_6h: Joi.number()
    .min(0)
    .max(23)
    .when("n3_4", {
      is: "1",
      then: Joi.required().messages(inputMessage("3-6", "시간")),
    }),
  n3_6m: Joi.number()
    .min(0)
    .max(59)
    .when("n3_4", {
      is: "1",
      then: Joi.required().messages(inputMessage("3-6", "분")),
    }),
  n4_1h: Joi.number()
    .min(0)
    .max(23)
    .required()
    .messages(inputMessage("4-1", "시간")),
  n4_1m: Joi.number()
    .min(0)
    .max(59)
    .required()
    .messages(inputMessage("4-1", "분")),
  n5: Joi.string()
    .valid("1", "2", "3", "4", "5", "6")
    .required()
    .messages(selectMessage("5")),
  n6: Joi.string().valid("1", "2").required().messages(selectMessage("6")),
  n7: Joi.string().valid("1", "2").required().messages(selectMessage("7")),
  n8: Joi.string().valid("1", "2").required().messages(selectMessage("8")),
  n9: Joi.string().valid("1", "2").required().messages(selectMessage("9")),
  n10: Joi.string().valid("1", "2").required().messages(selectMessage("10")),
  n11: Joi.string().valid("1", "2").required().messages(selectMessage("11")),
  n12: Joi.string().valid("1", "2").required().messages(selectMessage("12")),
});
