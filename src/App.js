import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Components/Products/Products";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import ProductFilter from "./Components/ProductFilter/ProductFilter";


// Carga de productos
const products = [
  {
    id: 1,
    name: "Remera",
    price: "2000",
    color: "Rojo",
    description: "Remera básica",
    size: "S",
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
    color: "Gris",
    description: "Sweater básico",
    size: "L",
  },
  {
    id: 4,
    name: "Musculosa",
    price: "2000",
    color: "Negro",
    description: "Musculosa básica",
    size: "XL",
  },
];


function App() {
  return (
    <>
      <NavBar />
      <div className="mainDiv">
        <SideBar/>
        <Products products={products} />
        <ProductFilter/>
      </div>
    </>
  );
}

export default App;
