'use server'
import { apiPaths } from "@/shared/paths";
import Joi from "joi";
import { ActionResultBase } from "./common/action-result-base";
import { catchActionApi } from "./common/catch-action-api";
import { axServer } from "../api/ax-server";
import { updateUser } from "@/server/cookies/user-cookie";

interface ChangeEmailDto {
  email: string;
}

const schema = Joi.object<ChangeEmailDto>({
  email: Joi.string().email().messages({
    "string.email": `이메일 형식을 확인해주세요.`,
  }),
})

interface ChangeEmailResult extends ActionResultBase<boolean, Partial<ChangeEmailDto>> { }

export async function changeEmail(_: ChangeEmailResult, formData: FormData): Promise<ChangeEmailResult> {
  const { error, value } = schema.validate({
    email: formData.get("email")
  });

  const result = await catchActionApi(error, () => axServer().put(apiPaths.users.changeEmail, { email: value.email }));

  if (result.status === 'error') return result;
  updateUser('email', value.email); // 쿠키에서 이메일 값을 변경해줌
  return { status: 'success' }
}

