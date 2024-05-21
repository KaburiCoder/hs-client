import { ReceptionPatient } from "health-screening-shared/interfaces.socket";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface States {
  patient?: ReceptionPatient;
}
interface Actions {
  setPatient: (patient: ReceptionPatient) => void;
  clearPatient: () => void;
}

const initialState: States = {
  patient: undefined,
};

const stateCreator: StateCreator<States & Actions> = (set) => ({
  ...initialState,
  setPatient: (patient) => set(() => ({ patient })),
  clearPatient: () => set(() => ({ patient: undefined })),
});

export const useSelectionPatientStore = create(devtools(stateCreator));
