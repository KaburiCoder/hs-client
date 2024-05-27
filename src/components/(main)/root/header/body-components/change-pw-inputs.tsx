"use client";
import ErrorBox from "@/components/error-box";
import ButtonL from "@/components/ui/button-l";
import { InputX } from "@/components/ui/input-x";
import { changePw } from "@/lib/actions/change-pw";
import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

export const ChangePwInputs = () => {
  const { user } = useServerCookie();
  const [state, action] = useFormState(changePw.bind(null, user?.userId!), {});

  useEffect(() => {
    if (state.status === "success") toast.success("변경되었습니다.");
  }, [state]);

  return (
    <form className="flex flex-1 flex-col gap-2" action={action}>
      <InputX
        name="password"
        label="변경할 비밀번호"
        type="password"
        errorMessage={state.errors?.password}
      />
      <InputX
        name="confirmPassword"
        label="비밀번호 확인"
        type="password"
        errorMessage={state.errors?.confirmPassword}
      />
      <ErrorBox errorMessage={state.errors?._form} />
      <ButtonL>변경</ButtonL>
    </form>
  );
};
