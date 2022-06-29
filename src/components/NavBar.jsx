import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/menu";
import AppDrawer from "../components/AppDrawer";
import { useState } from "react";

function NavBar() {
  const [showDrawer, setShowDrawer] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Drawer anchor={"left"} open={showDrawer} color="primary">
        <AppDrawer toggleDrawer={toggleDrawer} />
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setShowDrawer(!showDrawer)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Heroes
            </Typography>
            <Typography variant="text" component="div" mb={0.3}>
              Jalinson
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Log out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;