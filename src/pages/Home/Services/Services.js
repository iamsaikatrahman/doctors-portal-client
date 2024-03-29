import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo suscipit error, illum quae laudantium aperiam est in officiis nesciunt ullam porro saepe aspernatur expedita atque labore consequatur ipsam perspiciatis veritatis.",
    image: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo suscipit error, illum quae laudantium aperiam est in officiis nesciunt ullam porro saepe aspernatur expedita atque labore consequatur ipsam perspiciatis veritatis.",
    image: cavity,
  },
  {
    name: "Teath Whitening",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo suscipit error, illum quae laudantium aperiam est in officiis nesciunt ullam porro saepe aspernatur expedita atque labore consequatur ipsam perspiciatis veritatis.",
    image: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ color: "success.main", m: 2 }}
          variant="h6"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
          Services We Provides
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Grid item xs={4} sm={4} md={4} key={service.name}>
              <Service {...service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
