'use client';

import { useState } from "react";

export const useSignupState = () => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [roomKey, setRoomKey] = useState<string>("");
  const [managerCode, setManagerCode] = useState<string>("");

  function handleChangeUserId(e: React.ChangeEvent<HTMLInputElement>) {
    setUserId(e.target.value);
  }

  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleChangeConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }

  function handleChangeRoomKey(e: React.ChangeEvent<HTMLInputElement>) {
    setRoomKey(e.target.value);
  }

  function handleChangeManagerCode(e: React.ChangeEvent<HTMLInputElement>) {
    setManagerCode(e.target.value);
  }

  return {
    userId,
    password,
    confirmPassword,
    roomKey,
    managerCode,
    handleChangeUserId,
    handleChangePassword,
    handleChangeConfirmPassword,
    handleChangeRoomKey,
    handleChangeManagerCode,
  };
};