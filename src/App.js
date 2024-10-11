import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { createContext, useState } from "react";
import ProductModal from "./Components/ProductModal";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";

const MyContext = createContext();

function App() {

  const [isOpenProductModal, setIsOpenProductModal] = useState(false);

  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);

  const [isLogin, setisLogin] = useState(false);

  const values = {
    isOpenProductModal,
    setIsOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setisLogin,

  }



  return (
   <BrowserRouter>
    <MyContext.Provider value={values}>

   {
    isHeaderFooterShow === true && <Header /> 
   }
    
   <Routes>
      <Route path="/" exact={true} element={<Home/>} />
      <Route path="/cat/:id" exact={true} element={<Listing />} />
      <Route path="/product/:id" exact={true} element={<ProductDetails />} />
      <Route path="/cart" exact={true} element={<Cart />} />
      <Route path="/signIn" exact={true} element={<SignIn />} />
      <Route path="/signUp" exact={true} element={<SignUp />} />

   </Routes>

   {
    isHeaderFooterShow=== true && <Footer/> 
   }

   {
    isOpenProductModal=== true && <ProductModal/>
   }
    

   </MyContext.Provider>    
   </BrowserRouter>
  );
}
export { MyContext };
export default App;
