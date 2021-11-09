import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBg = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45,58,74, 0.8)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: "150px",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "400px", marginTop: "-110px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ mb: 5 }}
              style={{ color: "#5ce7ed" }}
            >
              APPOINTMENT
            </Typography>
            <Typography variant="h4" style={{ color: "white" }}>
              Make an Appointment Today
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 2 }}
              style={{ color: "white", fontSize: "14px", fontWeight: "300" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident ipsa quas doloremque vitae vero, inventore accusamus
              quibusdam repellendus sunt tenetur.
            </Typography>
            <Button style={{ backgroundColor: "#5ce7ed" }} variant="contained">
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
