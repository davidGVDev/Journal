import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <form>
        <Grid container>
          <Grid size={{ xs: 12 }} sx={{ mb: 3 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: 3 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} size={12}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Button variant="contained" fullWidth>
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
