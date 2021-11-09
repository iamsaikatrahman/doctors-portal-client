import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleBookingClose,
  name,
  time,
  date,
  setBookingSuccess,
}) => {
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };
  const handleBookSubmit = (e) => {
    // collect data
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    // send to server
    fetch("https://dry-brook-84015.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      });

    e.preventDefault();
  };

  return (
    <Modal
      open={openBooking}
      onClose={handleBookingClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleBookSubmit}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <TextField
            disabled
            sx={{ width: "90%", m: 1 }}
            defaultValue={time}
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            name="patientName"
            onBlur={handelOnBlur}
            defaultValue={user.displayName}
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            name="email"
            onBlur={handelOnBlur}
            defaultValue={user.email}
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            name="phone"
            type="number"
            onBlur={handelOnBlur}
            placeholder="Phone Number"
            size="small"
          />
          <TextField
            disabled
            sx={{ width: "90%", m: 1 }}
            defaultValue={date.toDateString()}
            size="small"
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
