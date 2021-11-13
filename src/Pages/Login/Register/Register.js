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
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import review from "../../../images/review.jpg";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, isLoading, user, error } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, history, loginData.name);
    e.preventDefault();
  };

  const bgImg = {
    backgroundImage: `url(${review})`,
    width:"100%"
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
        Register Here!
      </Typography>
      <Container style={bgImg}>
        <Grid
          container
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "center", pb: 5 }}
        >
          <Grid item sx={{ mt: 8 }} xs={12} md={6}>
            {!isLoading && (
              <form
                onSubmit={handleLoginSubmit}
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#191919",
                  pt: 5,
                }}
              >
                <TextField
                  sx={{ width: "100%", m: 1 }}
                  id="standard-basic"
                  label="Your Name"
                  name="name"
                  type="text"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%", m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%", m: 1 }}
                  id="standard-basic"
                  label="ReType Your Password"
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
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
                  Register
                </Button>
                <NavLink
                  style={{ textDecoration: "none", color: "black",fontWeight:"bold" }}
                  to="/login"
                >
                  <span>Already Registered?</span>
                  <span>Please Login</span>
                </NavLink>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">
                User Created successfully! Now Login to proceed
              </Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Register;
