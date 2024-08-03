export interface IBaseApiResponse<T = undefined> {
  message: string;
  data: T;
}

export interface IApiHookBaseResponse<T = undefined, K = undefined> {
  handler: (data: T) => Promise<IBaseApiResponse<K>>;
  data: IBaseApiResponse<K> | null;
  error: Error | null;
  loading: boolean;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
