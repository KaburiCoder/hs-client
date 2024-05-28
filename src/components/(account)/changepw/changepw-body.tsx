"use client";
import React from "react";
import AccountHero from "../account-hero";
import { ChangePwForm } from "@/components/change-pw-inputs";
import { AccountBottom } from "../account-bottom";
import { Lottie404 } from "@/components/lottie/lottie-404";

interface Props {
  userId: string | undefined;
}
export default function ChangePwBody({ userId }: Props) {
  return (
    <AccountHero
      title="비밀번호 변경"
      bottomIn={<AccountBottom type="changepw" />}
    >
      {userId ? (
        <ChangePwForm userId={userId} navToLogin />
      ) : (
        <div className="max-w-52">
          <Lottie404 className="" />
          <p className="mt-4 text-center text-lg font-bold text-red-500">
            만료된 페이지 입니다.
          </p>
        </div>
      )}
    </AccountHero>
  );
}
