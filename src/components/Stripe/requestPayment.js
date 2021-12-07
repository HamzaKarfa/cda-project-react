import { ENTRYPOINT } from '../../config/entrypoint'

export async function stripePayment ({ totalPrice, email, name }) {
    await fetch(ENTRYPOINT + '/create-payment-intent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            paymentMethodType: 'card',
            currency: 'eur',
            amount: totalPrice,
            paymentType: 'Stripe',
            userInfo: {
                email: email,
                name: name
            }
        })
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        return data
    }).catch(()=>{
        return false
    })
}
export async function stripeConfirmPayment (stripe, stripePaymentResponse, elements, CardElement, name) {
    stripe.confirmCardPayment(stripePaymentResponse.client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: name,
          },
        },
      })
      .then(function(result) {
        // Handle result.error or result.paymentIntent
        console.log(result);
        return result
      });
}
