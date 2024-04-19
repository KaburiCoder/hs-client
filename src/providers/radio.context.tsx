import { Dispatch, SetStateAction, createContext, useContext } from "react";

interface RadioContextType {
  value?: string | number | readonly string[] | undefined;
  setValue: Dispatch<
    SetStateAction<string | number | readonly string[] | undefined>
  >;
}

const initialize: RadioContextType = {
  value: undefined,
  setValue: () => {},
};

export const RadioContext = createContext<RadioContextType>(initialize);
