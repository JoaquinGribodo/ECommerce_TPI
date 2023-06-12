import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./Components/Services/Theme/Theme.Context";
import { APIContextProvider } from "./Components/Services/API/Api.Context";
import { CartContextProvider } from "./Components/Services/Cart/Cart.Context";
import { UsersContextProvider } from "./Components/Services/Users/Users.Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UsersContextProvider>
    <ThemeContextProvider>
      <APIContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </APIContextProvider>
    </ThemeContextProvider>
    </UsersContextProvider>
  </React.StrictMode>
);
