import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import { AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useMemo, useState } from "react";

const formData = {
  email: "",
  password: "",
};

const formValidations = {
  email: [(value: string) => value.includes("@"), "El correo no es válido"],
  password: [
    (value: string) => value.length >= 6,
    "La contraseña debe tener al menos 6 caracteres",
  ],
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;

    dispatch(startLoginWithEmailPassword(formState));
  };

  const googleLogin = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid size={{ xs: 12 }} sx={{ mb: 3 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} size={12}>
            <Grid
              size={{ xs: 12 }}
              sx={{ display: errorMessage ? "" : "none" }}
            >
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isCheckingAuthentication}
              >
                Login
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={googleLogin}
                disabled={isCheckingAuthentication}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} to="/auth/register">
              <Typography>¿No tienes una cuenta?</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
