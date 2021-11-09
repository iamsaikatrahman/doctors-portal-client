import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, authError, registerUser, isLoading } = useAuth();
  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(loginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1">Register</Typography>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Your Name"
                type="text"
                name="name"
                variant="standard"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Your Email"
                type="email"
                name="email"
                variant="standard"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Your Password"
                type="password"
                name="password"
                variant="standard"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                label="ReType Your Password"
                type="password"
                name="password2"
                variant="standard"
                onBlur={handleOnBlur}
              />
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button variant="text">Already Registered? Please Login</Button>
              </NavLink>
            </form>
          )}
          {user?.email && (
            <Alert severity="success">User created successfully !</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} style={{ width: "100%" }} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
