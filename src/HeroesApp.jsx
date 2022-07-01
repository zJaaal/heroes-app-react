import AppRouter from "./routers/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, Paper, CssBaseline } from "@mui/material";
import { AuthContext } from "./auth/AuthContext";
import { useEffect, useReducer } from "react";
import authReducer from "./auth/authReducer";
function HeroesApp() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const init = () => {
    return JSON.parse(localStorage.getItem("user")) || { logged: false };
  };

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AuthContext.Provider value={{ user, dispatch }}>
          <Paper>
            <AppRouter />
          </Paper>
        </AuthContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default HeroesApp;
