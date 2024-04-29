"use client";
import { Input, Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import AccountHero from "../account-hero";
import { paths } from "@/paths";
import { useMutation, useIsMutating } from "@tanstack/react-query";
import { signup } from "@/lib/api/signup";
import { useRouter } from "next/navigation";
import { Signup, signupSchema } from "@/models/signup";
import { useValidate } from "@/lib/hooks/use-validate";
import ButtonL from "@/components/ui/button-l";

export default function SignupPage() {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [roomKey, setRoomKey] = useState<string>("");
  const [accountKey, setAccountKey] = useState<string>("");
  const { push } = useRouter();
  const { mutate, isPending, error } = useMutation({
    mutationKey: [paths.signup],
    mutationFn: signup,
    onSuccess(data) {
      if (data?.status === 201) push(paths.root);
    },
  });
  const { validateError, validate } = useValidate<Signup, Signup>({ error });

  async function handleSignup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data: Signup = { userId, password, roomKey, accountKey };
    if (
      validate(signupSchema, {
        ...data,
        confirmPassword,
      })
    ) {
      mutate(data);
    }
  }

  return (
    <AccountHero
      onSubmit={handleSignup}
      title="Sign in to ClickSoft"
      formIn={
        <>
          <Input
            label="아이디"
            labelPlacement={"outside"}
            placeholder="계정 아이디"
            errorMessage={validateError?.error?.userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Input
            label="비밀번호"
            labelPlacement={"outside"}
            placeholder="계정 비밀번호"
            type="password"
            errorMessage={validateError?.error?.password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="비밀번호 확인"
            labelPlacement={"outside"}
            placeholder="비밀번호 확인"
            type="password"
            errorMessage={validateError?.error?.confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Input
            label="연결 코드"
            labelPlacement={"outside"}
            placeholder="데이터를 조회를 위한 코드"
            description="클릭소프트 담당자만 알 수 있어요."
            variant="faded"
            errorMessage={validateError?.error?.roomKey}
            onChange={(e) => setRoomKey(e.target.value)}
          />
          <Input
            label="관리자 코드"
            labelPlacement={"outside"}
            placeholder="관리자만 회원가입이 가능해요."
            description="클릭소프트 담당자만 알 수 있어요."
            variant="faded"
            errorMessage={validateError?.error?.accountKey}
            onChange={(e) => setAccountKey(e.target.value)}
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
