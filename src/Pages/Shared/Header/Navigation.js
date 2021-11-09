import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from "@mui/icons-material/Menu";
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const { user,logOut } = useAuth();
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <NavLink to="/home">
              Home
            </NavLink>
            <NavLink to="/about">
              About
            </NavLink>
            {user?.email ?
              <Button onClick={logOut} sx={{ color: "white" }}>{user.displayName} Log Out</Button> : <NavLink to="/login">
              Login
            </NavLink>}
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;