import { IconButton, Toolbar, AppBar, Grid, Typography } from "@mui/material";
import { MenuOutlined, LogoutOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { startLogout } from "../../store/auth/thunks";

export const NavBar = ({ drawerWidth }: { drawerWidth: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const onLogout = () => {
    dispatch(startLogout());
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 4,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Typography variant="h6" noWrap component="div">
            Journal App
          </Typography>
          <IconButton color="error" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
