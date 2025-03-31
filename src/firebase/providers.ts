import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FireBaseAuth } from "./config";

type Error = {
  code: string;
  message: string;
};

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
