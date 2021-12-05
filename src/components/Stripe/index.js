import React from "react";
import ReactDOM from "react-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";

import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe("pk_test_51H1pgUELWEJ2P8yhPSLtEl6WKqcS2Th0cQm8czuHbjAQ9jDro940cbH4SYUBhjfEz2UlM7A4qPgwCKoWWRFG11n9004d5qDlum");

const Stripe = () => {
  return (
      <div className="d-flex justify-content-center container ">
        <Elements stripe={stripePromise}>
            <CheckoutForm/>
        </Elements>
      </div>
  );
};







export default Stripe