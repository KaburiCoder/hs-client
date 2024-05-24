'use server';
import { AxiosError } from "axios";
import Joi from "joi";
import { flattenJoiError } from "health-screening-shared/joi";
import { ErrorDataBase } from "./action-result-base";

interface SuccessResult<T> {
  status: "success";
  response: T
}
interface ErrorResult {
  status: 'error';
  errors: ErrorDataBase;
  message?: string;
}

export async function catchActionApi<T>(error: Joi.ValidationError | undefined, asyncFn: () => Promise<T>): Promise<SuccessResult<T> | ErrorResult> {
  try {
    if (error) {
      return { status: 'error', errors: flattenJoiError(error) };
    }

    const response = await asyncFn();
    return { status: 'success', response };
  } catch (err) {
    if (err instanceof AxiosError) {
      return { status: 'error', errors: err.response?.data?.error, message: err.message };
    }
  }

  return { status: 'error', errors: { _form: "서버 통신 오류 발생" } };
}