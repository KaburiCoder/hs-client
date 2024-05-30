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
      if (err.code === 'ECONNREFUSED') {
        console.log('axiosError', err);
        return { status: 'error', errors: { _form: "서버와 연결에 실패했습니다." } };
      } else {
        const errors = err.response?.data?.error;
        const errorMessage = err.response?.data?.message;
        return { status: 'error', errors: errors || { _form: errorMessage }, message: errorMessage };
      }
    }
  }

  return { status: 'error', errors: { _form: "알 수 없는 오류 발생" } };
}