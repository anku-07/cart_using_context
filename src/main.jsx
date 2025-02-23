import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import CartContext from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartContext>
    <App />
  </CartContext>
);
