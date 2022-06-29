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
        <ListItem disablePadding>
          <ListItemButton href="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CloseIcon />
            </ListItemIcon>
            <ListItemText primary="Close" />
          </ListItemButton>
        </ListItem>
        {["DC", "Marvel"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={`/${text.toLowerCase()}`}>
              <ListItemIcon>
                <PeopleAltIcon />
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
