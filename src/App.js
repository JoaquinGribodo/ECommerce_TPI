import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Components/Products/Products";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";

const products = [
  {
    id: 1,
    name: "Remera",
    price: "2000",
    color: "Rojo",
    description: "Remera básica",
    size: "M",
  },
  {
    id: 2,
    name: "Pantalón",
    price: "2000",
    color: "Azul",
    description: "Pantalón básico",
    size: "M",
  },
  {
    id: 3,
    name: "Sweater",
    price: "2350",
    color: "Verde",
    description: "Sweater básico",
    size: "M",
  },
  {
    id: 4,
    name: "Zapatillas",
    price: "2000",
    color: "Negro",
    description: "Zapatillas básicas",
    size: "40",
  },
];

function App() {
  return (
    <>
      <NavBar />
      <div className="mainDiv">
        <SideBar />
        <Products products={products} />
      </div>
      <LogIn />
      <SignUp />
    </>
  );
}

export default App;
