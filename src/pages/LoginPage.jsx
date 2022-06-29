import { Container } from "@mui/system";
import { Button, Typography, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", { replace: true });
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" pt={2}>
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue="Jalinson"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ marginBottom: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
