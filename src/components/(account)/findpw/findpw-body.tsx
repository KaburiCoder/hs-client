"use client";
import AccountHero from "@/components/(account)/account-hero";
import React from "react";
import { AccountBottom } from "../account-bottom";
import FindPwForm from "./findpw-form";

export default function FindPwBody() {
  return (
    <AccountHero
      title="비밀번호 찾기"
      bottomIn={<AccountBottom type="findpw" />}
    >
      <FindPwForm />
    </AccountHero>
  );
}
