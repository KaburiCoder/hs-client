import React, { useState } from "react";

export const useLoginState = () => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleChangeUserId(e: React.ChangeEvent<HTMLInputElement>) {
    setUserId(e.target.value)
  }

  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  return {
    userId,
    password,
    handleChangeUserId,
    handleChangePassword
  }
};
