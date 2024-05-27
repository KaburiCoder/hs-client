"use client";
import AccountHero from "@/app/(account)/account-hero";
import { Link } from "@nextui-org/react";
import React from "react";
import ButtonL from "../../ui/button-l";
import { paths } from "@/paths";
import SignupInputs from "./signup-inputs";
import { useSignupState } from "./_hooks/use-signup-state";
import { useFetchSignup } from "./_hooks/use-fetch-signup";

interface Props {
  managerCode: string | undefined;
}

export default function SignupBody({ managerCode: confirmManagerCode }: Props) {
  const {
    userId,
    password,
    confirmPassword,
    roomKey,
    managerCode,
    email,
    orgName,
    handleChangeUserId,
    handleChangePassword,
    handleChangeConfirmPassword,
    handleChangeRoomKey,
    handleChangeManagerCode,
    handleChangeEmail,
    handleChangeOrgName,
  } = useSignupState();
  const { isPending, validateError, handleSignup } = useFetchSignup();

  return (
    <AccountHero
      onSubmit={handleSignup.bind(null, {
        userId,
        password,
        confirmPassword,
        roomKey,
        managerCode,
        email,
        orgName,
        confirmManagerCode: confirmManagerCode || "",
      })}
      title="Sign in to ClickSoft"
      formIn={
        <>
          <SignupInputs
            validateError={validateError}
            onChangeUserId={handleChangeUserId}
            onChangePassword={handleChangePassword}
            onChangeConfirmPassword={handleChangeConfirmPassword}
            onChangeRoomKey={handleChangeRoomKey}
            onChangeManagerCode={handleChangeManagerCode}
            onChangeEmail={handleChangeEmail}
            onChangeOrgName={handleChangeOrgName}
          />
          <ButtonL
            className="mt-4 text-white"
            type="submit"
            color="success"
            isLoading={isPending}
          >
            회원가입
          </ButtonL>
        </>
      }
      bottomIn={
        <>
          <Link
            className="text-center  font-bold text-blue-500"
            href={paths.findPw}
          >
            비밀번호 찾기
          </Link>
          <div className="space-x-2">
            <span>이미 계정이 존재하나요?</span>
            <Link className="text-center text-blue-500" href={paths.login}>
              로그인
            </Link>
          </div>
        </>
      }
    />
  );
}
