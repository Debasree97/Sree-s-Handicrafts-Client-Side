import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from "@mui/icons-material/Menu";
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

const Navigation = () => {
  const navStyle = {
    textDecoration: "none",
    marginRight:"5px"
  }
  const { user,logOut } = useAuth();
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#00000090" }}>
          <Toolbar>
            <img style={{width:"150px"}} src={logo} alt="" />
            <NavLink style={navStyle} to="/home">
              Home
            </NavLink>
            {user?.email && <NavLink style={navStyle} to="/Dashboard">
              Dashboard
            </NavLink>}
            {user?.email ? (
              <Button onClick={logOut} sx={{ color: "white" }}>
                {user?.displayName} Log Out
              </Button>
            ) : (
              <NavLink style={navStyle} to="/login">
                Login
              </NavLink>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;