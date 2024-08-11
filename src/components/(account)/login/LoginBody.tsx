"use client";
import React from "react";
import AccountHero from "@/components/(account)/AccountHero";
import { AccountBottom } from "../AccountBottom";
import LoginForm from "./LoginForm";

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
