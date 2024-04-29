import { Signup } from "@/models/signup";
import { ErrorResult, parseAxError } from "@/shared/error-result";
import Joi from "joi";
import { useState } from "react";

export interface Args {
  error: Error | null;
}

export function useValidate<TArgs, TError extends { [key: string]: any }>({
  error,
}: Args) {
  const [validateError, setValidateError] = useState<ErrorResult<TError>>();
  const err = validateError ?? parseAxError<Signup>(error);

  function validate(schema: Joi.ObjectSchema<TArgs>, args: TArgs): boolean {
    const { error } = schema.validate(args);
    if (!error) {
      setValidateError(undefined);
      return true;
    }

    const errorObj = error.details.reduce(
      (acc: { [key: string]: string }, cur: Joi.ValidationErrorItem) => {
        if (cur.context?.label) {
          acc[cur.context.label] = cur.message;
        }
        return acc;
      },
      {},
    );

    setValidateError({
      message: error.message,
      error: errorObj as TError,
    });
    return !error;
  }
  return { validateError: err, validate };
}
