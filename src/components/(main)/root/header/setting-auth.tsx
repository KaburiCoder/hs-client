"use client";
import ErrorBox from "@/components/error-box";
import ButtonL from "@/components/ui/button-l";
import { checkPw } from "@/lib/actions/check-pw";
import { Input } from "@nextui-org/react";
import { LockIcon } from "lucide-react";
import { useEffect } from "react";
import { useFormState } from "react-dom";

interface SettingAuthProps {
  onSuccess: () => void;
}

export function SettingAuth({ onSuccess }: SettingAuthProps) {
  const [state, action] = useFormState(checkPw, {});

  useEffect(() => {
    if (state.status === "success") onSuccess();
  }, [state.status]);

  return (
    <>
      <div>비밀번호를 입력하세요.</div>
      <form action={action}>
        <Input
          autoFocus
          classNames={{ errorMessage: "text-red-500" }}
          endContent={
            <LockIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
          }
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
          variant="bordered"
        />
        <ErrorBox
          className="mt-2"
          errorMessage={state.errors?.password || state.errors?._form}
        />
        <ButtonL className="my-4 w-full" color="success" type="submit">
          확인
        </ButtonL>
      </form>
    </>
  );
}
