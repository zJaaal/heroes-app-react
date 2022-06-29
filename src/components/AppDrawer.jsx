import React from "react";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const AppDrawer = ({ toggleDrawer }) => {
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {["Home", "Close", "DC", "Marvel"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text === "Close" ? (
                  <CloseIcon />
                ) : text === "Home" ? (
                  <HomeIcon />
                ) : (
                  <PeopleAltIcon />
                )}
              </ListItemIcon>
              {/* Here goes the link  */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AppDrawer;
