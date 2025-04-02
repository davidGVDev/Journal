import { TurnedInNotOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import { ListItem } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

interface NewNote {
  id?: string;
  title: string;
  body: string;
  date: number;
}

export const SideBarItem = ({ note }: { note: NewNote }) => {
  const dispatch = useDispatch();

  const { title, body } = useMemo(() => {
    const truncatedTitle = note.title.length > 17
      ? note.title.substring(0, 17) + "..."
      : note.title;
    
    const truncatedBody = note.body.length > 30
      ? note.body.substring(0, 30) + "..."
      : note.body;

    return {
      title: truncatedTitle,
      body: truncatedBody
    };
  }, [note.title, note.body]);

  const onSelectNote = () => {
    dispatch(setActiveNote(note));
  };

  return (
    <ListItem key={note.id} disablePadding>
      <ListItemButton onClick={onSelectNote}>
        <ListItemIcon>
          <TurnedInNotOutlined />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={title} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
