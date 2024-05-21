import Joi from "joi";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { validateSchema } from "../utils/validate-utli";
import { selectMessage } from "./joi-messages";

export interface LsOverweightState {
  n1: string | undefined;
  n2: string | undefined;
  n3: string | undefined;
}

interface Actions {
  setN1: (n1: string | undefined) => void;
  setN2: (n2: string | undefined) => void;
  setN3: (n3: string | undefined) => void;
  setState: (state: LsOverweightState) => void;
  validate: () => Joi.ValidationResult<LsOverweightState>;
  clear: () => void;
}

const initialState: LsOverweightState = {
  n1: undefined,
  n2: undefined,
  n3: undefined,
};

const stateCreator: StateCreator<LsOverweightState & Actions> = (set, get) => ({
  ...initialState,
  setN1: (n1) => set(() => ({ n1 })),
  setN2: (n2) => set(() => ({ n2 })),
  setN3: (n3) => set(() => ({ n3 })),
  setState: (state) => set(() => ({ ...state })),
  validate: () => validateSchema({ state: get(), initialState, schema }),
  clear: () => set(initialState),
});

export const useLsOverweightStore = create(devtools(stateCreator));

const schema = Joi.object<LsOverweightState>({
  n1: Joi.string().valid("1", "2").required().messages(selectMessage("1")),
  n2: Joi.string()
    .valid("1", "2", "3", "4")
    .required()
    .messages(selectMessage("2")),
  n3: Joi.string().valid("1", "2", "3").required().messages(selectMessage("3")),
});
