import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Service = ({ name, description, image }) => {
  return (
    <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
      <CardMedia
        component="img"
        style={{ width: "auto", height: "70px", margin: "0 auto" }}
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
