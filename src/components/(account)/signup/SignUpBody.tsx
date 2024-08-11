"use client";
import AccountHero from "@/components/(account)/AccountHero";
import React from "react";
import { AccountBottom } from "../AccountBottom";
import SignupForm from "./SignUpForm";

export default function SignupBody() {
  return (
    <AccountHero
      title="Sign in to ClickSoft"
      bottomIn={<AccountBottom type="signup" />}
    >
      <SignupForm />
    </AccountHero>
  );
}
