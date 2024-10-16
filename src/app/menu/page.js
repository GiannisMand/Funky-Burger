import React from "react";
import Header from "../components/header";
import AboutUs from "../components/aboutus"
import AboutUs2 from "../components/aboutus2"
import Link from "next/link";
import MenuItems from "../components/menuItem";
import ReturnToTop from "../components/returnToTop"
import ShoppingCart from "../components/shoppingCart"
import Footer from "../components/footer";


const Menu = () => {
  return (  
      <div className="bg-gray-100 min-h-screen">
        <Header/>
        <MenuItems/>
        <ReturnToTop/>
        <ShoppingCart/> 
        <Footer bgColor="bg-white"/>
      </div>
  )
} 

export default Menu