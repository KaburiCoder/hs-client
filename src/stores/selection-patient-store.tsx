import { ReceptionPatient } from "health-screening-shared/interfaces.socket";
import { create } from "zustand";

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

export const useSelectionPatientStore = create<States & Actions>((set) => ({
  ...initialState,
  setPatient: (patient) => set(() => ({ patient })),
  clearPatient: () => set(() => ({ patient: undefined })),
}));
