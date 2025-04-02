import { JournalLayout } from "../layout/JournalLayout";

import { NothingSelectedView } from "../views/NothingSelectedView";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { AppDispatch, RootState } from "../../store/store";
import { NoteView } from "../views/NoteView";

export const JournalPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isSaving, active } = useSelector((state: RootState) => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {
        (!!active) ? <NoteView /> : <NothingSelectedView />
      }
      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.8 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
