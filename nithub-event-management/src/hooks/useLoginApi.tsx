import { useApi } from "./useApi";
import { IApiHookBaseResponse, IBaseApiResponse } from "../types/api";
import { ILoginRequest, IUser } from "../types/api";
import { authService } from "../services/authService";

export const useLoginApi: () => IApiHookBaseResponse<
  ILoginRequest,
  IUser
> = () => {
  const loginRequest = useApi<IBaseApiResponse<IUser>, ILoginRequest>(
    (data: ILoginRequest) => {
      return authService.signin(data);
    }
  );

  const handleLogin = async (loginDetails: ILoginRequest) => {
    loginRequest.reset();

    return (await loginRequest.request(
      loginDetails
    )) as IBaseApiResponse<IUser>;
  };

  return {
    handler: handleLogin,
    data: loginRequest.data,
    error: loginRequest.error,
    loading: loginRequest.loading,
  };
};
