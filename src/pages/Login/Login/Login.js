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
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, signInWithGoogle, authError, loginUser, isLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(loginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1">Login</Typography>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Your Email"
                type="email"
                name="email"
                variant="standard"
                onChange={handleOnChange}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Your Password"
                type="password"
                name="password"
                variant="standard"
                onChange={handleOnChange}
              />
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
              <NavLink to="/register" style={{ textDecoration: "none" }}>
                <Button variant="text">New User? Please Register</Button>
              </NavLink>
            </form>
          )}
          <p>----------------------------</p>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            onClick={handleGoogleSignIn}
          >
            Google Sign In
          </Button>
          {user?.email && (
            <Alert severity="success">Login successfully !</Alert>
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

export default Login;
