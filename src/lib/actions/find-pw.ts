'use server'
import { axClient } from "@/lib/api/ax-client";
import { apiPaths } from "@/paths";
import Joi from "joi";
import { ActionResultBase } from "./common/action-result-base";
import { catchActionApi } from "./common/catch-action-api";

interface FindPwDto {
  userId: string;
  email: string;
}

const schema = Joi.object<FindPwDto>({
  userId: Joi.string().required().messages({
    "string.empty": `아이디를 입력해주세요.`,
  }),
  email: Joi.string().email().trim().lowercase().messages({
    "string.empty": `이메일을 입력해주세요.`,
    "string.email": `이메일 형식을 확인해주세요.`,
  }),
})

interface FindPwResult extends ActionResultBase<boolean, Partial<FindPwDto>> { }

export async function findPw(_: FindPwResult, formData: FormData): Promise<FindPwResult> {
  const { error, value } = schema.validate({
    userId: formData.get("userId"),
    email: formData.get("email")
  });

  const result = await catchActionApi(error, () => axClient.put(apiPaths.users.findpw(value.userId), { email: value.email }));

  if (result.status === 'error') return result;

  return { status: 'success' }
}

