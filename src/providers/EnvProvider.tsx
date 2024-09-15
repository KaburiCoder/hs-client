"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getEnv } from "@/server/env/getEnv";

interface EnvContextType {
  NEXT_ENV: string;
  DOMAIN: string;
  CLIENT_URL: string;
  SOCKET_URL: string;
  SERVER_URL: string;
  KAKAO_JS_KEY: string;
}

interface EnvAction {
  setEnv: (env: EnvContextType) => void;
}

const initialEnv: EnvContextType = {
  NEXT_ENV: "",
  DOMAIN: "",
  CLIENT_URL: "",
  SOCKET_URL: "",
  SERVER_URL: "",
  KAKAO_JS_KEY: "",
};

export const EnvContext = createContext<EnvContextType & EnvAction>({
  ...initialEnv,
  setEnv: () => {},
});

export const EnvProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [env, setEnv] = useState<EnvContextType>(initialEnv);

  useEffect(() => {
    getEnv().then((env) => {
      setEnv(env);
    });
  }, []);
  
  return (
    <EnvContext.Provider value={{ ...env, setEnv }}>
      {children}
    </EnvContext.Provider>
  );
};

export const useEnv = () => {
  return useContext(EnvContext);
};
