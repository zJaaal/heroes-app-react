import { Container } from "@mui/system";
import { Button, Typography, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import useForm from "../hooks/useForm";
import { types } from "../types/types";

const LoginPage = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [{ name }, handleInputChange] = useForm({ name: "" });
  const navigate = useNavigate();
  const route = localStorage.getItem("lastPath") || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const info = name.trim();
    if (!info.length) return;
    dispatch({ type: types.login, payload: { name: info } });

    navigate(route, { replace: true });
  };

  return (
    <Container>
      <Grid container spacing={2} component="form" onSubmit={handleLogin}>
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
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" sx={{ marginBottom: 2 }} type="submit">
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
