import ErrorBox from "@/components/error-box";
import { Signup } from "@/models/signup";
import { ErrorResult } from "@/shared/error-result";
import { Input } from "@nextui-org/react";
import React from "react";

interface Props {
  validateError: ErrorResult<Signup> | undefined;
  onChangeUserId: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeConfirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeRoomKey: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeManagerCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignupInputs({
  validateError,
  onChangeUserId: handleChangeUserId,
  onChangePassword: handleChangePassword,
  onChangeConfirmPassword: handleChangeConfirmPassword,
  onChangeRoomKey: handleChangeRoomKey,
  onChangeManagerCode: handleChangeManagerCode,
}: Props) {
  return (
    <>
      <InputX
        label="아이디"
        placeholder="계정 아이디"
        errorMessage={validateError?.error?.userId}
        onChange={handleChangeUserId}
      />
      <InputX
        label="비밀번호"
        placeholder="계정 비밀번호"
        type="password"
        errorMessage={validateError?.error?.password}
        onChange={handleChangePassword}
      />
      <InputX
        label="비밀번호 확인"
        placeholder="비밀번호 확인"
        type="password"
        errorMessage={validateError?.error?.confirmPassword}
        onChange={handleChangeConfirmPassword}
      />
      <InputX
        label="연결 코드"
        placeholder="데이터를 조회를 위한 코드"
        description="클릭소프트 담당자만 알 수 있어요."
        variant="faded"
        errorMessage={validateError?.error?.roomKey}
        onChange={handleChangeRoomKey}
      />
      <InputX
        label="관리자 코드"
        placeholder="관리자만 회원가입이 가능해요."
        description="클릭소프트 담당자만 알 수 있어요."
        variant="faded"
        errorMessage={
          validateError?.error?.confirmManagerCode ||
          validateError?.error?.managerCode
        }
        onChange={handleChangeManagerCode}
      />
    </>
  );
}

interface InputXProps {
  label: string;
  placeholder: string;
  errorMessage: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: string;
  type?: string;
  description?: string;
}

function InputX({
  label,
  placeholder,
  errorMessage,
  variant,
  type,
  description,
  onChange,
}: InputXProps) {
  return (
    <>
      <Input
        label={label}
        labelPlacement={"outside"}
        type={type}
        placeholder={placeholder}
        variant={variant as any}
        description={description}
        onChange={onChange}
      />
      <ErrorBox errorMessage={errorMessage} />
    </>
  );
}
