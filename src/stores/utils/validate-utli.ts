import Joi from "joi";

interface ValidateSchemaArgs<TState> {
  state: TState;
  initialState: TState;
  schema: Joi.ObjectSchema<TState>
}

export function validateSchema<TState extends object>({ state, initialState, schema }: ValidateSchemaArgs<TState>) {
  const validationState = Object.keys(state).reduce(
    (acc, key) => {
      const keys = Object.keys(initialState);
      if (keys.includes(key)) {
        acc[key] = state[key as keyof TState];
      }
      return acc;
    },
    {} as { [key: string]: any },
  );
  return schema.validate(validationState);
}