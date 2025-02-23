import React, { createContext, useState } from "react";

export const MyCartContext = createContext(null);

const CartContext = (props) => {
  const [items, setItems] = useState([]);

  return (
    <MyCartContext.Provider value={{ items, setItems }}>
      {props.children}
    </MyCartContext.Provider>
  );
};

export default CartContext;
