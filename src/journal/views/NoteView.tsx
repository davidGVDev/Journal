import { SaveOutlined } from "@mui/icons-material";
import { Grid, Typography, Button, TextField } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";
export const NoteView = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontSize={39} fontWeight="light">
            Nota
          </Typography>
        </Grid>
        <Grid>
          <Button>
            <SaveOutlined sx={{ fontSize: 30, color: "primary.main", mr: 1 }} />
            Guardar
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1, width: "100%" }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          rows={5}
          placeholder="¿Qué sucedió hoy?"
          sx={{ border: "none", mb: 1, width: "100%" }}
        />
      </Grid>
      {/* Imagenes */}
      <ImageGallery />
    </>
  );
};
