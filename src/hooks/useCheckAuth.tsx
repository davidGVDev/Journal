import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { logout } from "../store/auth/authSlice";
import { FireBaseAuth } from "../firebase/config";
import { login } from "../store/auth/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { startLoadingNotes } from "../store/journal/thunks";
export const useCheckAuth = () => {
  const { status } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    onAuthStateChanged(FireBaseAuth, async (user) => {
      if (!user) {
        dispatch(logout({ errorMessage: null }));
        return;
      }
      dispatch(
        login({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
      );
      dispatch(startLoadingNotes())
    });
  }, []);
  return {
    status,
  };
};
