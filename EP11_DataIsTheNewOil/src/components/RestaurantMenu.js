import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {


    const [showIndex, setShowIndex] = useState(null)
    //Lifting state up:
    //The open/close state is moved to the parent (RestaurantMenu)
    //so that only one category stays open at a time.
    //Parent controls which child (RestaurantCategory) should show items.
    //Instead of each category managing its own state,
    //the parent (RestaurantMenu) controls which category is open.
    //This makes RestaurantCategory a controlled component.

    const {resId} = useParams();
    const resInfo = useRestaurantMenu();

    if (resInfo === null) return <Shimmer />;

    const {name, menu} = resInfo[resId - 1];
    console.log(resInfo[resId-1]);
    
    

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-10 underline">{name}</h1>

            {/** categories accordions */}
            {menu.map((category, index) => (
                <RestaurantCategory key={index} data={category} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(showIndex === index ? null : index)}/>
            ))}
            {/** Here RestaurantCategory component is controlled by its parent component RestaurantMenu through showItems, 
            RestaurantCategory does not have its own state, this is known as controlled component */}

 
        </div>
    )
};

export default RestaurantMenu;