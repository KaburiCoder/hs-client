import { create } from "zustand";

interface States {
  name: string;
  age: number;
  sex: string;
}

interface Actions {
  setName: (name: string) => void;
  setAge: (age: number) => void;
  setSex: (sex: string) => void;
}

const initialState: States = {
  age: 0,
  name: "",
  sex: "",
};

export const useTestStore = create<States & Actions>((set) => ({
  ...initialState,
  setName: (name) => set(() => ({ name })),
  setAge: (age) => set(() => ({ age })),
  setSex: (sex) => set(() => ({ sex })),
}));
