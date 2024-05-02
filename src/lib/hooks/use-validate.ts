import { Signup } from "@/models/signup";
import { ErrorResult, parseAxError } from "@/shared/error-result";
import { flattenJoiError } from "health-screening-shared/joi";
import Joi from "joi";
import { useState } from "react";

export interface Args {
  error?: Error | null;
}

export function useValidate<TArgs, TError extends { [key: string]: any }>(
  args?: Args,
) {
  const [validateError, setValidateError] = useState<ErrorResult<TError>>();
  const err =
    validateError ?? (args?.error ? parseAxError(args.error) : undefined);

  function validateAndGetResult<TResult>(
    schema: Joi.ObjectSchema<TArgs>,
    args: TArgs,
  ): TResult | undefined {
    const { error, value } = schema.validate(args);
    if (!error) {
      setValidateError(undefined);
      return value as any as TResult;
    }

    setValidateError({
      message: error.message,
      error: flattenJoiError(error) as TError,
    });
  }
  return { validateError: err, validateAndGetResult };
}
