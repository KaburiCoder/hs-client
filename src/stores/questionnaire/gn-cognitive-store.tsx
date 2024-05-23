import Joi from "joi";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { validateSchema } from "../utils/validate-utli";
import { selectMessage } from "../lifestyle/joi-messages";
import { ICognitive } from "health-screening-shared/interfaces";

export interface QnCognitiveState extends Partial<ICognitive> {}

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
  setN12: (n12: string | undefined) => void;
  setN13: (n13: string | undefined) => void;
  setN14: (n14: string | undefined) => void;
  setN15: (n15: string | undefined) => void;
  setState: (state: QnCognitiveState) => void;
  validate: () => Joi.ValidationResult<QnCognitiveState>;
  clear: () => void;
}

const initialState: QnCognitiveState = {
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
  n12: undefined,
  n13: undefined,
  n14: undefined,
  n15: undefined,
};

const stateCreator: StateCreator<QnCognitiveState & Actions> = (set, get) => ({
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
  setN12: (n12) => set(() => ({ n12 })),
  setN13: (n13) => set(() => ({ n13 })),
  setN14: (n14) => set(() => ({ n14 })),
  setN15: (n15) => set(() => ({ n15 })),
  setState: (state) => set(() => ({ ...state })),
  validate: () => validateSchema({ state: get(), initialState, schema }),
  clear: () => set(initialState),
});

export const useQnCognitiveStore = create(devtools(stateCreator));

const schema = Joi.object<QnCognitiveState>({
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
  n12: Joi.string()
    .valid("1", "2", "3")
    .required()
    .messages(selectMessage("12")),
  n13: Joi.string()
    .valid("1", "2", "3")
    .required()
    .messages(selectMessage("13")),
  n14: Joi.string()
    .valid("1", "2", "3")
    .required()
    .messages(selectMessage("14")),
  n15: Joi.string()
    .valid("1", "2", "3")
    .required()
    .messages(selectMessage("15")),
});
