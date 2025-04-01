import { AppDispatch } from "../store";
import { checkingCredentials, logout, login } from "./authSlice";
import {
  registerUserWithEmailPassword,
  signInWithGoogle,
  loginWithEmailPassword,
  logoutFirebase,
} from "../../firebase/providers";

interface RegisterData {
  email: string;
  password: string;
  displayName: string;
}

export const checkingAuthentication = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));
    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}: RegisterData) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));
    dispatch(login(result));
  };
};

export const startLoginWithEmailPassword = ({
  email,
  password,
}: RegisterData) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailPassword({
      email,
      password,
      displayName: "",
    });
    if (!result?.ok)
      return dispatch(
        logout({
          errorMessage:
            "Usuario o contraseña incorrectos / Usuario no encontrado",
        })
      );
    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch: AppDispatch) => {
    await logoutFirebase();
    dispatch(logout({ errorMessage: null }));
  };
};
