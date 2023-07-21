import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Heading,
  Total,
} from "./checkout.styles.js";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <Heading>Product</Heading>
        </HeaderBlock>
        <HeaderBlock>
          <Heading>Description</Heading>
        </HeaderBlock>
        <HeaderBlock>
          <Heading>Quantity</Heading>
        </HeaderBlock>
        <HeaderBlock>
          <Heading>Price</Heading>
        </HeaderBlock>
        <HeaderBlock>
          <Heading>Remove</Heading>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
