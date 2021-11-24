import React, { useState } from "react";

import getStripe from "../../../utils/stripejs";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const BuyNow = styled.button`
  color: #000;
  display: block;
  width: 100%;
  padding: 1rem 0;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  background-color: rgb(255, 178, 56);
  border-radius: 6px;
  font-family: "Montserrat";
  font-weight: 800;
  border: none;
  outline: none;
  transition: 200ms box-shadow;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const BuyNowLink = styled(BuyNow);

const pStyles = css`
  margin: 0 1rem 0 0;
  font-weight: bold;
`;

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      shippingAddressCollection: {
        allowedCountries: ["AU"],
      },
      billingAddressCollection: "required",
      lineItems: [{ price: "price_1IUnMuCEAdYMID96eB1mBYhs", quantity: 1 }],
      successUrl: `https://aidenkinder.com/thank-you`,
      cancelUrl: `https://aidenkinder.com/buy-the-book`,
    });
    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <p css={pStyles}>$24.99</p>
      {/* <BuyNow disabled={loading} onClick={redirectToCheckout}>
        BUY NOW
      </BuyNow> */}
      <BuyNow
        as="a"
        css={css`
          text-align: center;
          text-decoration: none;
        `}
        href="https://www.amazon.com.au/Journey-Advenia-Aiden-Kinder/dp/0648988910"
        target="_blank"
      >
        BUY NOW
      </BuyNow>
    </Wrapper>
  );
};
export default Checkout;
