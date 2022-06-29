import AppRouter from "./routers/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, Paper, CssBaseline } from "@mui/material";
function HeroesApp() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Paper>
          <AppRouter />
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default HeroesApp;
