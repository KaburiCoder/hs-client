"use client";
import ErrorBox from "@/components/ErrorBox";
import ButtonL from "@/components/ui/ButtonL";
import { InputX } from "@/components/ui/InputX";
import { changeEmail } from "@/lib/actions/change-email";
import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

export const ChangeEmailInputs = () => {
  const [email, setEmail] = useState("");
  const [state, action] = useFormState(changeEmail, {});
  const { user, refetch } = useServerCookie();

  useEffect(() => {
    setEmail(user?.email ?? "");
  }, [user]);

  useEffect(() => {
    if (state.status === "success") {
      refetch();
      toast.success("변경되었습니다.");
    }
  }, [state]);

  return (
    <form className="flex flex-1 flex-col gap-2" action={action}>
      <InputX
        name="email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={state.errors?.email}
      />
      <ErrorBox errorMessage={state.errors?._form} />
      <ButtonL disabled={email.toLowerCase() === user?.email.toLowerCase()}>
        변경
      </ButtonL>
    </form>
  );
};
