import { Grid, Typography } from "@mui/material";
import { StarBorderOutlined } from "@mui/icons-material";
export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 3,
        width: '100%',
        padding: 2,
      }}
    >
        <Grid display="flex" justifyContent="center">
            <StarBorderOutlined sx={{fontSize: 100, color: 'white'}} />
        </Grid>
        <Grid >
            <Typography color="white" variant="h6" textAlign="center">
                Selecciona una entrada o nota
            </Typography>
        </Grid>
    </Grid>
  );
};
