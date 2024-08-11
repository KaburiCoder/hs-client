"use client";
import AccountHero from "@/components/(account)/AccountHero";
import React, { useState } from "react";
import { AccountBottom } from "../AccountBottom";
import FindPwForm from "./FindPwForm";
import { LottieSuccess } from "@/components/lottie/LottieSuccess";

export default function FindPwBody() {
  const [email, setEmail] = useState("");

  return (
    <AccountHero
      title="비밀번호 찾기"
      bottomIn={<AccountBottom type="findpw" />}
    >
      {email ? (
        <div className="flex max-w-52 flex-col gap-4">
          <LottieSuccess />
          <div className="text-center space-y-2">
            <p className="text-lg font-bold text-blue-500">{email}</p>
            <p>위 메일로 URL을 전송했습니다.</p>
          </div>
        </div>
      ) : (
        <FindPwForm onSuccess={setEmail} />
      )}
    </AccountHero>
  );
}
