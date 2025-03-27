import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        className="box-shadow"
        size={{ xs: 3 }}
        sx={{ width:{md:450}, backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  )
}
