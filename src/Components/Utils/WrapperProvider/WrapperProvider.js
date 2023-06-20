import React from "react";
import { ThemeContextProvider } from "../../.././Components/Services/Theme/Theme.Context";
import { APIContextProvider } from "../../.././Components/Services/API/Api.Context";
import { CartContextProvider } from "../../.././Components/Services/Cart/Cart.Context";
import { UsersContextProvider } from "../../.././Components/Services/Users/Users.Context";

const WrapperProvider = ({ children }) => {
  return (
    <UsersContextProvider>
      <ThemeContextProvider>
        <APIContextProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </APIContextProvider>
      </ThemeContextProvider>
    </UsersContextProvider>
  );
};

export default WrapperProvider;
