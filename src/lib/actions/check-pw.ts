'use server'
import { axClient } from "@/lib/api/ax-client";
import { paths } from "@/paths";
import { getUser } from "@/server/cookies/user-cookie";
import { AxiosError } from "axios";
import { flattenJoiError } from "health-screening-shared/joi";
import Joi from "joi";

interface CheckPwArgs {
  password: string;
}

const schema = Joi.object<CheckPwArgs>({
  password: Joi.string().required().messages({ "string.empty": "비밀번호를 입력하세요." }),
})

interface CheckPwResult {
  status?: "success" | "error";
  errors?: { userId?: string, password?: string, _form?: string };
}

export async function checkPw(state: CheckPwResult, formData: FormData): Promise<CheckPwResult> {
  const { error, value } = schema.validate(Object.fromEntries(formData))
  const user = await getUser();
  if (error) {
    return { status: 'error', errors: flattenJoiError(error) };
  }

  console.log(user?.userId, value.password);

  try {
    const res = await axClient.post(paths.checkPw, {
      userId: user?.userId,
      password: value.password,
    });
    if (res.status === 200) return { status: 'success' }
  } catch (err) {
    if (err instanceof AxiosError) {
      return { status: 'error', errors: err.response?.data?.error };
    }
  }

  return { status: 'error', errors: { _form: "서버 통신 오류 발생" } };
}

