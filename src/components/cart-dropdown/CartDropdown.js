import React from "react";
import Button from "../button/Button";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown-container">
    <div className="cart-items" />
    <Button>CHECKOUT</Button>
  </div>
);

export default CartDropdown;
