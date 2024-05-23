import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface State {
  error?: QuestionnaireErrorResult;
}

interface Actions {
  setError: (error?: QuestionnaireErrorResult) => void;
  clearError: () => void;
}

const initialState: State = {
  error: undefined,
};

const stateCreator: StateCreator<State & Actions> = (set) => ({
  ...initialState,
  setError: (error) => set(() => ({ error })),
  clearError: () => set(initialState),
});

export const useQuestionErrorStore = create(devtools(stateCreator));

export interface QuestionnaireErrorResult {
  "history.n3"?: string;
  "smoking.n4"?: string;
  "smoking.n4_1"?: string;
  "smoking.n4_1.smoking"?: string;
  "smoking.n4_1.term"?: string;
  "smoking.n4_1.term.totalYears"?: string;
  "smoking.n4_1.term.cigarettes"?: string;
  "smoking.n4_1.term.quitYears"?: string;
  "smoking.n5"?: string;
  "smoking.n5_1"?: string;
  "smoking.n5_1.smoking"?: string;
  "smoking.n5_1.term"?: string;
  "smoking.n5_1.term.totalYears"?: string;
  "smoking.n5_1.term.cigarettes"?: string;
  "smoking.n5_1.term.quitYears"?: string;
  "smoking.n6"?: string;
  "smoking.n6_1"?: string;
  "drink.n7"?: string;
  "drink.n7.frequency"?: string;
  "drink.n7_1"?: string;
  "drink.n7_2"?: string;
  "activity.n8_1"?: string;
  "activity.n8_2"?: string;
  "activity.n8_2.hours"?: string;
  "activity.n8_2.minutes"?: string;
  "activity.n9_1"?: string;
  "activity.n9_2"?: string;
  "activity.n9_2.hours"?: string;
  "activity.n9_2.minutes"?: string;
  "activity.n10"?: string;
  "addExam.n11"?: string;
  "addExam.n12"?: string;
  "addExam.n13_1"?: string;
  "addExam.n13_2"?: string;
  "addExam.n13_3"?: string;
  "addExam.n13_4"?: string;
  "addExam.n13_5"?: string;
  "addExam.n13_6"?: string;
  "addExam.n14"?: string;
  "addExam.n15"?: string;
}
