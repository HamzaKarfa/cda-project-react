import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { stripeConfirmPayment, stripePayment } from "./requestPayment";
import { newOrder } from "../../actions/order";
import './CheckoutForm.css'
function mapStateToProps (state, props){
    return {
      cart : state.cart,
      totalPrice : state.totalPrice
    }
}
function mapDispatchToProps (dispatch){
    return {
      createOrder: (payload)=>dispatch(newOrder(payload))
    }
}

function CheckoutFormToConnect({createOrder, cart, totalPrice}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [Message, setMessage] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory()
  useEffect(()=>{
    if (error || !totalPrice) {
      setTimeout(() => {
        history.push('/cart')
      }, 1000);
    }
  })
  const handleSubmitStripe = async ev => {
      
      ev.preventDefault();
      setProcessing(true);
      await createOrder({orderProducts: cart, user_id: {email, name}})

      if(!stripe || !elements){
        return 
      }
      const stripePaymentResponse = await stripePayment({ totalPrice, email, name })
      if (stripePaymentResponse) {
        const resultConfirm = await stripeConfirmPayment(stripe, stripePaymentResponse, elements, CardElement, name)
        if (resultConfirm) {
          setProcessing(false);
          setMessage('Votre commande a bien été pris en compte');
        }
      } else {
        setError('erreur lors du payement de la commande');
      }
  };


  const renderForm = () => {
    const options = {
      style: {
        base: {
          color: "#32325d",
          width: '100%',
          fontSize: "16px",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a"
        }
      }
    };

    return (
      <form className="payment-form" onSubmit={handleSubmitStripe}>
        <h1 className="my-2"> Passer votre commande </h1>
        <h4 className="my-4">Sous-total ({cart.length} articles): {totalPrice.toLocaleString(navigator.language, {
            minimumFractionDigits: 2
          })}€</h4>

        <div className="w-100">
          <div className="d-flex">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              autoComplete="cardholder"
              className="m-2"
              onChange={(e)=>{setName(e.target.value)}}
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="votre.email@example.com"
              autoComplete="cardholder"
              className="m-2"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          {error && <div className="message color-secondary">{error}</div>}

          <div className="m-5">
            <h4>information de paiement</h4>
            <CardElement
              id='card-element'
              options={options}
            />
          </div>
        </div>


        <button className="btn bg-color-primary">
          {"Passer la commande"}
        </button>
      </form>
    );
  };

  return (
    <div className="checkout-form w-75">
      <div className="sr-payment-form">
        {renderForm()}
      </div>
    </div>
  );
}


const CheckoutForm = connect(mapStateToProps,mapDispatchToProps)(CheckoutFormToConnect)
export default CheckoutForm