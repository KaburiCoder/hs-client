"use client";
import React from "react";
import AccountBaseForm from "../account-base-form";
import { InputX } from "@/components/ui/input-x";
import ButtonL from "@/components/ui/button-l";
import { useFormState } from "react-dom";
import { findPw } from "@/lib/actions/find-pw";
import ErrorBox from "@/components/error-box";

export default function FindPwForm() {
  const [state, action] = useFormState(findPw, {});
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
