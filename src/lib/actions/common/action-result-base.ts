export interface ErrorDataBase {
  [key: string]: string | undefined;
  _form?: string;
}

export interface ActionResultBase<T, TError> {
  status?: "success" | "error";
  data?: T;
  errors?: ErrorDataBase & TError;
}