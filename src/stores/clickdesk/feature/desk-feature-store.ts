import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface State {
  unUseQR: boolean;
  isChanged?: boolean;
}

interface Actions {
  setInit: (state: State) => void;
  setUnUseQR: (unUseQR: boolean) => void;
  clear: () => void;
  getState: () => State;
}

const initialState: State = {
  unUseQR: false,
  isChanged: false,
};

const stateCreator: StateCreator<State & Actions> = (set, get) => ({
  ...initialState,
  setInit: (state) => set(() => ({ ...state, isChanged: false })),
  setUnUseQR: (unUseQR) => set(() => ({ unUseQR, isChanged: true })),
  clear: () => set(initialState),
  getState: () => {
    const { setInit, setUnUseQR, clear, isChanged, ...state } = get();
    return state;
  },
});

export const useDeskFeatureStore = create(devtools(stateCreator));
