import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import ContactUs from "./Components/ContactUs/ContactUs";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre"
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentMode = localStorage.getItem('darkMode');
    if (currentMode === 'true') {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
    },
    {
      path: "/home",
      element: <DashBoard />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
    {
      path: "/shoppingcart",
      element: <ShoppingCart />,
    },
    {
      path: "/home/contact",
      element: <ContactUs />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/whoweare",
      element: <WhoWeAre/>,
    },
  ]);

  return (
    <><RouterProvider router={router} /><div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
       <nav>
         <div className="switch-container">
           <label className="switch">
             <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
             <span className="slider round"></span>
           </label>
         </div>
       </nav>
     </div></>
  );
};

export default App;
