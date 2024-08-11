"use client";
import React, { useEffect } from "react";
import AccountBaseForm from "../AccountBaseForm";
import { InputX } from "@/components/ui/InputX";
import ButtonL from "@/components/ui/ButtonL";
import { useFormState } from "react-dom";
import { findPw } from "@/lib/actions/find-pw";
import ErrorBox from "@/components/ErrorBox";

interface Props {
  onSuccess?: (email: string) => void;
}
export default function FindPwForm({ onSuccess }: Props) {
  const [state, action] = useFormState(findPw, {});

  useEffect(() => {
    if (state.status === "success") {
      onSuccess?.(state.data!.email);
    }
  }, [state]);
  
  return (
    <AccountBaseForm action={action}>
      <InputX
        label="아이디"
        name="userId"
        labelPlacement={"outside"}
        placeholder="Enter your ID"
        errorMessage={state?.errors?.userId}
      />
      <InputX
        label="Email"
        name="email"
        labelPlacement={"outside"}
        placeholder="가입 시 입력했던 Email"
        errorMessage={state?.errors?.email}
      />
      <ErrorBox errorMessage={state.errors?._form} />
      <ButtonL
        type="submit"
        className="text-white"
        color="success"
        variant={"default"}
      >
        비밀번호 찾기
      </ButtonL>
    </AccountBaseForm>
  );
}
