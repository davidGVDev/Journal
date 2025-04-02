import { SaveOutlined } from "@mui/icons-material";
import { Grid, Typography, Button, TextField } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";
import { useForm } from "../../hooks/useForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

import { useMemo, useEffect } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const NoteView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { active: activeNote, messageSaved , isSaving} = useSelector((state: any) => state.journal);
  const { title, body, date, onInputChange, formState } = useForm(activeNote);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  return (
    <>
      <Grid
        className="animate__animated animate__fadeIn animate__faster"
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontSize={39} fontWeight="light">
            {dateString}
          </Typography>
        </Grid>
        <Grid>
          <Button onClick={onSaveNote} disabled={isSaving}>
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
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          rows={5}
          placeholder="¿Qué sucedió hoy?"
          sx={{ border: "none", mb: 1, width: "100%" }}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      {/* Imagenes */}
      <ImageGallery />
    </>
  );
};
