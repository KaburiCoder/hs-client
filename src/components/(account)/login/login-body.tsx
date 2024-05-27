"use client";
import React from "react";
import AccountHero from "@/components/(account)/account-hero";
import { AccountBottom } from "../account-bottom";
import LoginForm from "./login-form";

export default function LoginBody() {
  return (
    <AccountHero
      title="Sign in to ClickSoft"
      bottomIn={<AccountBottom type="signin" />}
    >
      <LoginForm />
    </AccountHero>
  );
}
