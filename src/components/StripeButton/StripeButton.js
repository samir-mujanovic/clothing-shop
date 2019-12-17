import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_FmZUK6JBkksdddAB6kGYP42J00nnTx8Ua1";
  const onToken = token => {
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="New Vision"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
