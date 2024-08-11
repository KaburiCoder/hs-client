import React from "react";
import AccountBaseForm from "../AccountBaseForm";
import ErrorBox from "@/components/ErrorBox";
import ButtonL from "@/components/ui/ButtonL";
import { InputX } from "@/components/ui/InputX";
import { useLoginState } from "./_hooks/use-login-state";
import { useFetchLogin } from "./_hooks/use-fetch-login";

export default function LoginForm() {
  const { userId, password, handleChangeUserId, handleChangePassword } =
    useLoginState();
  const { isPending, validateError, handleSignin } = useFetchLogin();

  return (
    <AccountBaseForm onSubmit={handleSignin.bind(null, { userId, password })}>
      <InputX
        label="아이디"
        labelPlacement={"outside"}
        placeholder="Enter your ID"
        errorMessage={validateError?.error?.userId}
        onChange={handleChangeUserId}
      />
      <InputX
        label="비밀번호"
        labelPlacement={"outside"}
        placeholder="Enter your password"
        type="password"
        errorMessage={validateError?.error?.password}
        onChange={handleChangePassword}
      />
      <ErrorBox errorMessage={validateError?.error?._form} />

      <ButtonL
        type="submit"
        className="text-white"
        color="success"
        variant={"default"}
        isLoading={isPending}
      >
        로그인
      </ButtonL>
    </AccountBaseForm>
  );
}
