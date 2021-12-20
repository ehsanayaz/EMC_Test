import Link from "next/link";
import { useState } from "react";

import LinkCategories from "./LinkCategories";
import { LogoutButton } from "components/Buttons/LogoutButton";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MapIcon from "@mui/icons-material/Map";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

export default function Sidebar({
  toggleDrawer,
  isOpen,
  isLoggedIn,
  linksArray,
  children,
}) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <SwipeableDrawer open={isOpen} onClose={toggleDrawer} onOpen={toggleDrawer}>
      {children}
      <Divider />
      <List>
        {linksArray.map((link, idx) => {
          return (
            <Link key={idx} as={`/${link}`} href={`/${link}`}>
              <ListItem button>
                <ListItemIcon>
                  <MapIcon />
                </ListItemIcon>
                <ListItemText primary={`${link.toUpperCase()}`} />
              </ListItem>
            </Link>
          );
        })}
      </List>
      <Divider />
      <List>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <NotListedLocationIcon />
          </ListItemIcon>
          <ListItemText primary="Explore Categories" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open}>
          <List sx={{ pl: 2 }}>
            <LinkCategories />
          </List>
        </Collapse>
        {isLoggedIn && (
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <MeetingRoomIcon />
            </ListItemIcon>
            <LogoutButton />
          </ListItemButton>
        )}
      </List>
      <style jsx>{``}</style>
    </SwipeableDrawer>
  );
}
