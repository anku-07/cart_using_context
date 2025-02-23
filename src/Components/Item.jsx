import React, { useContext } from "react";
import { MyCartContext } from "../context/CartContext";

const Item = (props) => {
  const myCartItem = useContext(MyCartContext);
  console.log(myCartItem);
  console.log(myCartItem);

  return (
    <div>
      <p>Product : {props.productName}</p>
      <p>Price : ${props.price}</p>
      <button
        onClick={() =>
          myCartItem.setItems([
            ...myCartItem.items,
            { productName: props.productName, price: props.price },
          ])
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;
