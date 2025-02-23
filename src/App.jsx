import Cart from "./Components/Cart";
import Item from "./Components/Item";

function App() {
  return (
    <div>
      <h1>Hello from app</h1>
      <Item productName={"macBook Pro"} price={100000} />
      <Item productName={"pendrive "} price={4000} />
      <Item productName={"iphone Pro"} price={80000} />
      <Cart />
    </div>
  );
}

export default App;
