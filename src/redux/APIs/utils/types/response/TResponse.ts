export type TResponse<T> = {
  isSuccess: boolean;
  data: T;
  error: string | null;
};
