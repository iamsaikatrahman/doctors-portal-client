import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Jw28oDKxzwNIelbr646veYZoFUIHesziu3IxG47y52WC5xU5yDXtGmJsM0SHE0foIu7tP3HZYdSuZSZKRIT5rmf00vZNYtQHZ"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(`https://dry-brook-84015.herokuapp.com/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>
        Please pay for: {appointment.patientName} for {appointment.serviceName}
      </h2>

      <h4>Pay: ${appointment.price}</h4>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
