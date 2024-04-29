import Joi from "joi";

export interface Signin {
  userId: string;
  password: string;
}

export const signinSchema = Joi.object<Signin>({
  userId: Joi.string().trim().required().messages({
    "string.empty": `아이디를 입력하세요.`,
  }),
  password: Joi.string().required().messages({
    "string.empty": `비밀번호를 입력하세요.`,
  }),
}).options({ abortEarly: false });
