import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useState, useMemo } from "react";

const formData = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  displayName: [(value: string) => value.length > 0, "El nombre es requerido"],
  email: [(value: string) => value.includes("@"), "El correo no es válido"],
  password: [
    (value: string) => value.length >= 6,
    "La contraseña debe tener al menos 6 caracteres",
  ],
};

export const RegisterPage = () => {
  const { status, errorMessage } = useSelector(
    (state: RootState) => state.auth
  );
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
    formState,
  } = useForm(formData, formValidations);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Registro">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid size={{ xs: 12 }} sx={{ mb: 3 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

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
              size={{ xs: 12}}
              sx={{ display: errorMessage ? "" : "none" }}
            >
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isCheckingAuthentication || formSubmitted}
              >
                Registrar
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} to="/auth/login">
              <Typography>¿Ya tienes una cuenta?</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
