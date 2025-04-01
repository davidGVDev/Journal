import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import { FireBaseAuth } from "./config";

type Error = {
  code: string;
  message: string;
};

interface RegisterData {
  email: string;
  password: string;
  displayName: string;
}

export const GoogleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FireBaseAuth, GoogleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    const { displayName, email, photoURL } = user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid: user.uid,
    };
  } catch (error) {
    const errorCode = (error as Error).code;
    const errorMessage = (error as Error).message;
    return {
      ok: false,
      errorMessage,
      errorCode,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}: RegisterData) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FireBaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    await updateProfile(resp.user, {
      displayName,
    });
    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: (error as Error).message,
      errorCode: (error as Error).code,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }: RegisterData) => {
  try {
    const resp = await signInWithEmailAndPassword(FireBaseAuth, email, password);
    const { uid, photoURL , displayName} = resp.user;
    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: (error as Error).message,
      errorCode: (error as Error).code,
    };
  }
}

export const logoutFirebase = async () => {
  return await signOut(FireBaseAuth);
};
