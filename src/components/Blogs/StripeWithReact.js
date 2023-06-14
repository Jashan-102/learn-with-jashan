import React from "react";
import CodeContainer from "../Other/CodeContainer";

export default function StripeWithReact() {

  return (
    <div className="container mx-auto">
      <h1 className="h1">StripeJS With React</h1>
      <div>
        <h6 className="h6">1. Setup:</h6>
        <p>
          Firstly setup stripe by installing <br />
          npm install --save @stripe/react-stripe-js @stripe/stripe-js
        </p>
        <h6 className="h6">2. Elements Component and loadStripe</h6>
        <CodeContainer>
          {`const stripePromise = loadStripe(‘publish_key’)`}
        </CodeContainer>
        <p>
          Publish_key for production will be provided by backend dev. You can add this in env file.
          Call loadStripe from @stripe/stripe-js with your publishable key.The loadStripe function asynchronously loads the Stripe.js script and initializes a Stripe object.<br />
          In case of connect account you need to add connect account id as second param into loadStripe:
        </p>
        <CodeContainer>
          {`const stripePromise = loadStripe('publish_key', {stripeAccount: 'connect_id',}) `}
        </CodeContainer>
        <p> Once loadStripe successful. We need to call a stripe API to createPaymentIntent(). This API will return you an intent either setup_intent or payment_intent. That intent object consist a client_secrete_key and existing_payment_methods.</p>
        <p>
          <strong>Payment_method_id:</strong> with this you can create a payment in a one click. No need to add user Card info again.
        </p>
        <p><strong>Client_secrete_key:</strong> is used when stripe confirms payments.</p>
        <p>Pass the returned Promise to Elements.</p>
        <p>After stripe load: <br />
          Wrap your payment form inside Element Provider and Pass the loasStripe return promise to Element:
        </p>
        <CodeContainer>
          {`<Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>`}
        </CodeContainer>
        <h6 className="h6">3. Element Components</h6>
        <p>
          Element Components provide a flexible way to securely collect payment information in your React app.
          Element Component provide you Payment form which is Totally manage by Stripe.
        </p>
        <p>Available Element components:</p>
        <ol className="list-inside list-decimal">
          <li>PaymentElement</li>
          <li>CardElement</li>
          <li><a href="https://stripe.com/docs/stripe-js/react#available-element-components">https://stripe.com/docs/stripe-js/react#available-element-components</a></li>
        </ol>
        <h6 className="h6">4. UseElement Hook:</h6>
        <p>const elements = useElements()</p>
        <p>
          This elements instance will help us to access user card info that we can use in stripe.confirmPayment.
          If you need to access an Element from a class component, use ElementsConsumer instead.
        </p>
        <CodeContainer>
          {`const res = await stripe.confirmCardSetup(clientSecret, {
          payment_method: {
          card: elements.getElement(CardNumberElement),
        billing_details: {
          address: {postal_code: zipCode }
            }
          }
      })`}
        </CodeContainer>
        <p>Also in case you want to send more info to stripe on submit add it into:</p>
        <CodeContainer>
          {`billing_details: {address: {postal_code: zipCode } }`}
        </CodeContainer>
        <p>
          In Case of class component:
          <a href="https://stripe.com/docs/stripe-js/react#elements-consumer">https://stripe.com/docs/stripe-js/react#elements-consumer</a>
        </p>
        <p>
          Note: that if you pass a Promise to the Elements provider and the Promise has not yet resolved, then useElements will return null.
        </p>
        <h6 className="h6">5. UseStripe Hook:</h6>
        <p>
          The useStripe hook returns a reference to the Stripe instance passed to the Elements provider.
          This will help to use stripe methods:
          <a href="https://stripe.com/docs/js/payment_intents/confirm_payment">https://stripe.com/docs/js/payment_intents/confirm_payment</a>
        </p>
        <CodeContainer>
          {`const res = await stripe.confirmCardSetup(Client_secreate_key, {
          payment_method: {
          card: elements.getElement(CardNumberElement),
        billing_details: {
          address: {postal_code: zipCode }
            }
          }
      })`}
        </CodeContainer>
        <p>
          In Case of class component:
          <a href="https://stripe.com/docs/stripe-js/react#elements-consumer">https://stripe.com/docs/stripe-js/react#elements-consumer</a>

          Note: that if you pass a Promise to the Elements provider and the Promise has not yet resolved, then useStripe will return null.
        </p>

        <h6 className="h6">6. Confirms Done:</h6>
        <p>
          Once the Stripe JS confirmation done. You can do as per project and backend requirement:
          You can send Stripe JS confirm response to APi for logs
        </p>
        <h6 className="h6">7. Customizing and Styling:</h6>
        <CodeContainer>
          {`<CardNumberElement options={{style: { base: { fontSize: '14px', }}}} />`}
        </CodeContainer>
        <h6 className="h6">8. Difference b/w SetUp Intent and Pyament intent:</h6>
        In Payment intent: when intent API called an order intent wil be shown in Stripe dashboard with the status of incomplete or pending. Once payment complete it will be amarked as successful.
        But in Setup Intent If payment complete only then it will visible on stripe dashboard.

      </div>
      <br />
      <h6 className="h6">Summary: </h6>
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
      <h6 className="h6">
        Reference: 
        <a className="ms-4" href="https://stripe.com/docs/stripe-js/react">
          https://stripe.com/docs/stripe-js/react
        </a>
      </h6>
    </div>
  );
}
