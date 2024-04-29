import { AxiosError } from "axios";

export interface ErrorResult<T extends { [key: string]: any }> {
  message: string;
  error?: T & { _form?: string };
  errors?: ErrorsResult[];
}

export interface ErrorsResult {
  message: string;
  path: string[];
  pathKey?: string;
}

export function parseAxError<T extends { [key: string]: any }>(
  error: Error | null,
): ErrorResult<T> | undefined {
  if (!error) return;
  if (error instanceof AxiosError) {
    return error.response?.data as ErrorResult<T>;
  }

  return { message: error.message ?? "알 수 없는 에러 발생" };
}
