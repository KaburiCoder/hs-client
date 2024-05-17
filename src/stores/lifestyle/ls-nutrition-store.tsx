import Joi from "joi";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { validateSchema } from "../utils/validate-utli";
import { selectMessage } from "./joi-messages";

export interface LsNutritionState {
  n1: string | undefined;
  n2: string | undefined;
  n3: string | undefined;
  n4: string | undefined;
  n5: string | undefined;
  n6: string | undefined;
  n7: string | undefined;
  n8: string | undefined;
  n9: string | undefined;
  n10: string | undefined;
  n11: string | undefined;
}

interface Actions {
  setN1: (n1: string | undefined) => void;
  setN2: (n2: string | undefined) => void;
  setN3: (n3: string | undefined) => void;
  setN4: (n4: string | undefined) => void;
  setN5: (n5: string | undefined) => void;
  setN6: (n6: string | undefined) => void;
  setN7: (n7: string | undefined) => void;
  setN8: (n8: string | undefined) => void;
  setN9: (n9: string | undefined) => void;
  setN10: (n10: string | undefined) => void;
  setN11: (n11: string | undefined) => void;
  validate: () => Joi.ValidationResult<LsNutritionState>;
  clear: () => void;
}

const initialState: LsNutritionState = {
  n1: undefined,
  n2: undefined,
  n3: undefined,
  n4: undefined,
  n5: undefined,
  n6: undefined,
  n7: undefined,
  n8: undefined,
  n9: undefined,
  n10: undefined,
  n11: undefined,
};

const stateCreator: StateCreator<LsNutritionState & Actions> = (set, get) => ({
  ...initialState,
  setN1: (n1) => set(() => ({ n1 })),
  setN2: (n2) => set(() => ({ n2 })),
  setN3: (n3) => set(() => ({ n3 })),
  setN4: (n4) => set(() => ({ n4 })),
  setN5: (n5) => set(() => ({ n5 })),
  setN6: (n6) => set(() => ({ n6 })),
  setN7: (n7) => set(() => ({ n7 })),
  setN8: (n8) => set(() => ({ n8 })),
  setN9: (n9) => set(() => ({ n9 })),
  setN10: (n10) => set(() => ({ n10 })),
  setN11: (n11) => set(() => ({ n11 })),
  validate: () => validateSchema({ state: get(), initialState, schema }),
  clear: () => set(initialState),
});

export const useLsNutritionStore = create(devtools(stateCreator));

const schema = Joi.object<LsNutritionState>({
  n1: Joi.string().valid("1", "2", "3").required().messages(selectMessage("1")),
  n2: Joi.string().valid("1", "2", "3").required().messages(selectMessage("2")),
  n3: Joi.string().valid("1", "2", "3").required().messages(selectMessage("3")),
  n4: Joi.string().valid("1", "2", "3").required().messages(selectMessage("4")),
  n5: Joi.string().valid("1", "2", "3").required().messages(selectMessage("5")),
  n6: Joi.string().valid("1", "2", "3").required().messages(selectMessage("6")),
  n7: Joi.string().valid("1", "2", "3").required().messages(selectMessage("7")),
  n8: Joi.string().valid("1", "2", "3").required().messages(selectMessage("8")),
  n9: Joi.string().valid("1", "2", "3").required().messages(selectMessage("9")),
  n10: Joi.string()
    .valid("1", "2", "3")
    .required()
    .messages(selectMessage("10")),
  n11: Joi.string()
    .valid("1", "2", "3")
    .required()
    .messages(selectMessage("11")),
});
