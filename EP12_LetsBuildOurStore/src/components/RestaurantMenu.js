import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {


    const [showIndex, setShowIndex] = useState(null)

    const {resId} = useParams();
    const resInfo = useRestaurantMenu();

    if (resInfo === null) return <Shimmer />;

    const {name, menu} = resInfo[resId - 1];
    console.log(resInfo[resId-1]);
    
    

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-10 underline">{name}</h1>

            {menu.map((category, index) => (
                <RestaurantCategory key={index} data={category} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(showIndex === index ? null : index)}/>
            ))}
        
        </div>
    )
};

export default RestaurantMenu;