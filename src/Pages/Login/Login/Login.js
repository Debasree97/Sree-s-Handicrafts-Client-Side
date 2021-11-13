import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import review from "../../../images/review.jpg";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { userLogin, isLoading, user, error } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    userLogin(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const bgImg = {
    backgroundImage: `url(${review})`,
    height: "100%",
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="p"
        className="custom-font"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#191919",
          pt: 5,
        }}
        gutterBottom
      >
        Please Login
      </Typography>
      <Container style={bgImg}>
        <Grid
          container
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "center", pb: 5 }}
        >
          <Grid item sx={{ mt: 8 }} xs={12} md={6}>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "100%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  type="email"
                  onChange={handleOnChange}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%", m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  variant="standard"
                />

                <Button
                  sx={{
                    width: "100%",
                    m: 1,
                    color: "#191919",
                    fontWeight: "bold",
                  }}
                  className="btn-style"
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                    marginLeft:"5px"
                  }}
                  to="/register"
                >
                  <span>Don't Have an Account?</span>
                  <span>Please Register</span>
                </NavLink>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Login successful!</Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Login;
