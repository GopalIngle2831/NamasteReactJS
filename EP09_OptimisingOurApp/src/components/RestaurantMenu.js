import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams()

    const resInfo = useRestaurantMenu() //Custom hook, always name your hook starting with (use) because react recommend us to do that, not mandatory but easy to understand
    //Now this custom hook is handling the api call
    //It is a good way to write code in clean format and modular code.
    //Custom hooks allow us to extract and reuse stateful logic across components while keeping UI separate from business logic.
     
    if (resInfo===null) return <Shimmer/>

    const {name, menu} = resInfo[resId-1]

    return (
        <div className="menu">
           <h1>{name}</h1>
           <h3>Menu</h3>
           <ul>
            {menu.map((item) => (
                <li key={item.id}>
                    {item.name} - Rs {item.price}
                </li> 
            ))}
           </ul>
        </div>
    )
}

export default RestaurantMenu;