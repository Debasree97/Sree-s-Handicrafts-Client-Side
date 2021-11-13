import {
  AppBar,
  Button,
  IconButton,
  List,
  Toolbar,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

const Navigation = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    navStyle: {
      textDecoration: "none",
      marginRight: "20px",
      color: "white",
    },
    navStyleDrawer: {
      textDecoration: "none",
      marginLeft: "20px",
      color: "Black",
    },
    navIcon: {
      [theme.breakpoints.up("md")]: {
        display: "none !important",
      },
    },
    navMenu: {
      [theme.breakpoints.down("md")]: {
        display: "none !important",
      },
      btnStyle: {
        backgroundImage:
          "linear-gradient(to bottom right, #f0ea4c, #dcb925,#8f792a)",
      },
    },
  });
  const { navStyle, navIcon, navMenu, navStyleDrawer } = useStyle();
  const { user, logOut } = useAuth();

  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 300 }} role="presentation">
      <List>
        <ListItemText>
          <NavLink className={navStyleDrawer} to="/home">
            Home
          </NavLink>
        </ListItemText>
        <Divider />
        <ListItemText>
          <NavLink className={navStyleDrawer} to="/exploreproduct">
            Explore
          </NavLink>
        </ListItemText>
        <Divider />
        {user?.email && (
          <>
            <ListItemText>
              <NavLink className={navStyleDrawer} to="/dashboard">
                Dashboard
              </NavLink>
            </ListItemText>
            <Divider />
          </>
        )}
        {user?.email ? (
          <>
            <Box sx={{paddingRight:"20px"}}>{user?.displayName}</Box>
            <Button
              className="btn-style"
              variant="contained"
              onClick={logOut}
              sx={{ color: "#191919", fontWeight: "bold", ml: 1,}}
            >
              Log Out
            </Button>
          </>
        ) : (
          <ListItemText>
            <NavLink className={navStyleDrawer} to="/login">
              Login
            </NavLink>
          </ListItemText>
        )}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#191919" }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1, p: 1 }}>
              <img style={{ width: "100px" }} src={logo} alt="" />
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => {
                setState(true);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box className={navMenu}>
              <NavLink className={navStyle} to="/home">
                Home
              </NavLink>

              <NavLink className={navStyle} to="/exploreproduct">
                Explore
              </NavLink>

              {user?.email && (
                <NavLink className={navStyle} to="/dashboard">
                  Dashboard
                </NavLink>
              )}
              {user?.email ? (
                <>
                  {user?.displayName}
                  <Button
                    className="btn-style"
                    variant="contained"
                    onClick={logOut}
                    sx={{ color: "#191919", fontWeight: "bold", ml: 1 }}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <NavLink className={navStyle} to="/login">
                  Login
                </NavLink>
              )}
            </Box>

            <div>
              <React.Fragment>
                <Drawer
                  open={state}
                  onClose={() => {
                    setState(false);
                  }}
                >
                  {list}
                </Drawer>
              </React.Fragment>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navigation;
