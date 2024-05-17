import Joi from "joi";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { validateSchema } from "../utils/validate-utli";

interface State {
  n1: string | undefined;
  n2: string | undefined;
  n3: string | undefined;
  n4: string | undefined;
  n5: string | undefined;
  n6: string | undefined;
  n7: string | undefined;
  n8: string | undefined;
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
  validate: () => Joi.ValidationResult<State>;
  clear: () => void;
}

const initialState: State = {
  n1: undefined,
  n2: undefined,
  n3: undefined,
  n4: undefined,
  n5: undefined,
  n6: undefined,
  n7: undefined,
  n8: undefined,
};

const stateCreator: StateCreator<State & Actions> = (set, get) => ({
  ...initialState,
  setN1: (n1) => set(() => ({ n1 })),
  setN2: (n2) => set(() => ({ n2 })),
  setN3: (n3) => set(() => ({ n3 })),
  setN4: (n4) => set(() => ({ n4 })),
  setN5: (n5) => set(() => ({ n5 })),
  setN6: (n6) => set(() => ({ n6 })),
  setN7: (n7) => set(() => ({ n7 })),
  setN8: (n8) => set(() => ({ n8 })),
  validate: () =>  validateSchema({ state: get(), initialState, schema }),
  clear: () => set(initialState),
});
export const useLsSmokingStore = create(devtools(stateCreator));

const schema = Joi.object<State>({
  n1: Joi.string().valid("1", "2", "3", "4").required(),
  n2: Joi.string().valid("1", "2", "3", "4", "5", "6", "7", "8").required(),
  n3: Joi.string().valid("1", "2", "3", "4").required(),
  n4: Joi.string().valid("1", "2").required(),
  n5: Joi.string().valid("1", "2").required(),
  n6: Joi.string().valid("1", "2", "3", "4").required(),
  n7: Joi.string().valid("1", "2").required(),
  n8: Joi.string().valid("1", "2", "3", "4").required(),
});
