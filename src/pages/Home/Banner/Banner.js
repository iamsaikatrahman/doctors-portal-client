import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const bannerBG = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: "450px",
};

const Banner = () => {
  return (
    <Container style={bannerBG} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          style={{ ...verticalCenter, textAlign: "left" }}
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3, fontSize: "14px", color: "gray", fontWeight: "300" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              cupiditate autem repellat rem ducimus. Numquam sunt doloribus
              saepe veritatis? Itaque autem vitae delectus a voluptate eos,
              expedita fuga totam qui?
            </Typography>
            <Button style={{ backgroundColor: "#5ce7ed" }} variant="ccontained">
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "350px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
