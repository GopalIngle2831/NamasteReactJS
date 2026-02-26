import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams()
    const resInfo = useRestaurantMenu() 
    if (resInfo===null) return <Shimmer/>
    const {name, menu} = resInfo[resId-1]
    return (
        <div className="menu min-h-screen bg-gray-50 py-10 px-6">
           <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
               <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
                   {name}
               </h1>
               <div className="w-20 h-1 bg-pink-500 mx-auto mb-8 rounded-full"></div>
               <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                   Menu
               </h3>
               <ul className="space-y-4">
                    {menu.map((item) => (
                        <li 
                            key={item.id}
                            className="flex justify-between items-center bg-gray-100 px-6 py-4 rounded-2xl hover:shadow-md transition duration-300"
                        >
                            <span className="text-lg font-medium text-gray-800">
                                {item.name}
                            </span>
                            <span className="text-pink-600 font-semibold">
                                Rs {item.price}
                            </span>
                        </li> 
                    ))}
               </ul>
           </div>
        </div>
    )
}

export default RestaurantMenu;