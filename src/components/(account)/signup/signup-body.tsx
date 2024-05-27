"use client";
import AccountHero from "@/components/(account)/account-hero";
import React from "react";
import { AccountBottom } from "../account-bottom";
import SignupForm from "./signup-form";

interface Props {
  managerCode: string | undefined;
}

export default function SignupBody({ managerCode }: Props) {
  return (
    <AccountHero
      title="Sign in to ClickSoft"
      bottomIn={<AccountBottom type="signup" />}
    >
      <SignupForm confirmManagerCode={managerCode} />
    </AccountHero>
  );
}
