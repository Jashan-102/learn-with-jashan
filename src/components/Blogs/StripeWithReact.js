import React from "react";

export default function StripeWithReact() {
  return (
    <div className="container mx-auto">
      <h1>Stripe With React</h1>

      <div>

      </div>




      <h5>Summary: </h5>
      <ol>
        <li> Install stripe</li>
        <li>LoadStripe instance with publish_key </li>
        <li>Wrap your form with <code>`${'<Elements stripe={stripePromise}>'}`</code> and pass stripe load promise as props to it.</li>
        <li> Render Stripe payment component i.e,<code>`${'<CardElement />'}`</code></li>
        <li> Payment Intent API called.</li>
        <li>Access the card info with the help of useElement hook instance. </li>
        <li>Confirm your payment from stripe JS with the help of UseStripe Hook instance and methods an use client_secrete_key which returned by payment intent api. </li>
        <li>Once Stripe JS payment confirmation done you can make a API call for logs
        </li>
        <li>You can also use an existing payment methods.
        </li>
        <li>Its Done !</li>




      </ol>



      <h6>
        Reference:
        <a className="ms-4" href="https://stripe.com/docs/stripe-js/react">
          https://stripe.com/docs/stripe-js/react
        </a>
      </h6>
    </div>
  );
}
