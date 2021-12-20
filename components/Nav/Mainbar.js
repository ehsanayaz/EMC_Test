import Link from "next/link";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { LogoutButton } from "components/Buttons/LogoutButton";
import LinkCategories from "./LinkCategories";
import { DropMenu } from "./DropMenu";
import { fontFamily } from "@mui/system";

const Mainbar = ({ toggleDrawer, linksArray, isLoggedIn, children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ConditonalIcon = isLoggedIn ? (
    [
      <MenuItem onClick={handleClose} key="1">
        <Link as="/profile" href="/profile" className="nav-list">
          <h3>My Locations</h3>
        </Link>
      </MenuItem>,
      <MenuItem onClick={handleClose} key="2">
        <LogoutButton />
      </MenuItem>,
    ]
  ) : (
    <Link as="/auth/login" href="/auth/login">
      <MenuItem onClick={handleClose}>Login</MenuItem>
    </Link>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ 
        minHeight: "7vh",
        backgroundColor: "rgb(250,255,255)",
        color:'black',
        fontFamily: 'sans-serif'
         }}>
        <Toolbar
          text="rgba(0,0,0)"
        >
          <IconButton
            size="large"
            className="menu-button"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link as="/" href="/" className="nav-list">
            <Typography
              variant="h6"
              component="h1"
              sx={{ flexGrow: 1 }}
              className="nav-list"
            >
              EMC HUB
            </Typography>
          </Link>
          <LinkCategories isMainbar>
            {linksArray.map((link, idx) => {
              return (
                <li key={idx} className="nav-list">
                  <Link as={`/${link}`} href={`/${link}`}>
                    <h3>{link.toUpperCase()}</h3>
                  </Link>
                </li>
              );
            })}
          </LinkCategories>
          <DropMenu
            title={children}
            condition={isLoggedIn}
            alt={
              <>
                <AccountCircle />
                <h2 className="h2-nav">Login</h2>
              </>
            }
          >
            {ConditonalIcon}
          </DropMenu>
        </Toolbar>
      </AppBar>
      <style jsx global>{`
        .nav-list {
          cursor: pointer;
        }

        .h2-nav {
          margin-left: 10px;
        }
      `}</style>
    </>
  );
};

export default Mainbar;
