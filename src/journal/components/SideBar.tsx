import { TurnedInNotOutlined } from "@mui/icons-material";
import {
  Box,
  Drawer,
  Typography,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const SideBar = ({ drawerWidth }: { drawerWidth: number }) => {
  const { displayName } = useSelector((state: RootState) => state.auth);
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {["Enero", "Febrero", "Marzo", "Abril"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNotOutlined />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
