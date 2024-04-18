import { Dispatch, SetStateAction, createContext, useContext } from "react";

interface RadioContextType {
  value?: string | number;
  setValue: Dispatch<SetStateAction<string | undefined>>;
}

const initialize: RadioContextType = {
  value: undefined,
  setValue: () => {},
};

export const RadioContext = createContext<RadioContextType>(initialize);
