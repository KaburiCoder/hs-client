'use server'
import { axClient } from "@/lib/api/ax-client";
import { apiPaths, paths } from "@/paths";
import Joi from "joi";
import { ActionResultBase } from "./common/action-result-base";
import { catchActionApi } from "./common/catch-action-api";

interface ChangePwDto {
  password: string;
  confirmPassword: string;
}

const schema = Joi.object<ChangePwDto>({
  password: Joi.string().required().messages({
    "string.empty": `비밀번호를 입력하세요.`,
    "any.only": `비밀번호와 일치하지 않습니다.`,
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": `비밀번호 확인란을 입력하세요.`,
    "any.only": `비밀번호와 일치하지 않습니다.`,
  }),
})

interface ChangePwResult extends ActionResultBase<boolean, Partial<ChangePwDto>> { }

export async function changePw(userId: string, _: ChangePwResult, formData: FormData): Promise<ChangePwResult> {
  const { error, value } = schema.validate({
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword")
  });

  if (!userId) {
    return { status: 'error', errors: { _form: "사용자 정보가 올바르지 않습니다." } };
  }

  const result = await catchActionApi(error, () => axClient.put(apiPaths.users.changepw(userId), { password: value.password }));

  if (result.status === 'error') return result;

  return { status: 'success' }
}

