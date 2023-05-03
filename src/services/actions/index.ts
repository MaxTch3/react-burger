import { TForgotActions } from "./forgot-password";
import { TGetUserActions } from "./get-user";
import { TLoginActions } from "./login-user";
import { TLogoutActions } from "./logout-user";
import { TRefreshTokenActions } from "./refresh-token";
import { TRegisterActions } from "./register-user";
import { TResetActions } from "./reset-password";
import { TUpdateUserActions } from "./update-user";

export type TUserActions =
  TRegisterActions
  | TLoginActions
  | TGetUserActions
  | TForgotActions
  | TResetActions
  | TUpdateUserActions
  | TRefreshTokenActions
  | TLogoutActions;

