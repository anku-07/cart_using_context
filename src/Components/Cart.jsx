import React, { useContext } from "react";
import { MyCartContext } from "../context/CartContext";

const Cart = () => {
  const cart = useContext(MyCartContext);
  const total = cart.items.reduce((a, b) => a + b.price || 0, 0);

  return (
    <div>
      <h2>Cart section</h2>
      {cart &&
        cart.items.map((data, index) => (
          <li key={index}>
            {data.productName} - {data.price}
          </li>
        ))}
      <h5>Total Price:{total}</h5>
    </div>
  );
};

export default Cart;
