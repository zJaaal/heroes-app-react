import React from "react";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";

const AppDrawer = ({ toggleDrawer }) => {
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        <ListItem disablePadding>
          <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>
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
            <Link to={`/${text.toLowerCase()}`}>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAltIcon />
                </ListItemIcon>
                {/* Here goes the link  */}
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Link to="/search">
            <ListItemButton>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default AppDrawer;
