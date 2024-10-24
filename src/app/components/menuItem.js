"use client"
import React, {useState, useEffect} from "react";


const MenuItems = ({handleAddToCart}) => {
  //server
  const [items, setItems] = useState([])
  const[loading, setLoading] = useState(true) // not used yet



  //fetching
  useEffect(() => { 
    const fetchItems = async () => {
      try {
        const res = await fetch('http://localhost:5000/items')
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.log('Error fetching data!', error)
      } finally{
        setLoading(false)
      }

    }
    fetchItems();
  }, [])

  

  return (
    <div className="p-8 flex-row" >
      <h2 className="text-center text-black text-3xl mb-6 pixel-font">Funky's Menu</h2>
      <div className="space-y-8 flex flex-col">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg shadow-neumorphic"
          >
            {/* Left Side: Image and Text */}
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h3 className="pixel-font text-xl font-semibold text-gray-900">{item.name}<span className="p-1"></span>{item.price}$</h3>
                <p className="pixel-font text-gray-700 mt-2">{item.description}</p>
                <div className="border mt-4 w-[90px] shadow-neumorphic rounded-md border-gray-900 flex justify-center bg-emerald-300"> 
                <button onClick={(e) => handleAddToCart(item, e)} className="flex justify-center items-center text-purple-900 text-sm font-bold">Add to Cart</button>
                </div>
              </div>
            </div>
            {/* Right Side: Icon and Text */}
            <div className="flex items-center space-x-2">
              <img
                src={item.rightIcon}
                alt={item.rightDescription}
                className="w-6 h-6 object-contain"
              />
              <p className="pixel-font text-gray-700">{item.rightDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;