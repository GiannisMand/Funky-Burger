// src/app/checkout/page.js
"use client";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useCartContext } from "../hooks/cartContext";

const Checkout = () => {
  const { cart, setCart } = useCartContext();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (item, change) => {
    setCart((prevCart) => {
      const newCart = prevCart
        .map((cartItem) => {
          if (cartItem.id === item.id) {
            const updatedQuantity = cartItem.quantity + change;
            if (updatedQuantity <= 0) {
              return null; // remove item from cart if quantity goes to 0 or less
            }
            return { ...cartItem, quantity: updatedQuantity };
          }
          return cartItem;
        })
        .filter(Boolean); // remove null items
  
      localStorage.setItem("cart", JSON.stringify(newCart)); // update localStorage
      return newCart;
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-purple-50 to-indigo-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-8 pixel-font text-gray-900">Checkout</h1>
        {cart.length > 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-neumorphic">
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-600">{item.name}</h2>
                    <p className="text-gray-300">{item.description}</p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item, -1)}
                        className="px-2 text-red-500"
                      >
                        -
                      </button>
                      <span className="text-gray-500">x{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item, 1)}
                        className="px-2 text-green-500"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <span className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">Total: ${totalPrice.toFixed(2)}</span>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md">Proceed to Payment</button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;