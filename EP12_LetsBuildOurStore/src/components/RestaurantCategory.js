import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = (props) => {

    const {data, showItems, setShowIndex} = props
    console.log(setShowIndex);

    const handleClicked = () => {
        setShowIndex() 
    }

    return (
        <div>
            <div className="w-6/12 mx-auto bg-gray-100 p-2 my-5 shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClicked}>
                    <span className="font-semibold text-lg">{data.card} ({data.items.length})</span>
                    <span>{showItems ? "⬆️" : "⬇️"}</span>
               </div>
                {showItems && <ItemsList items={data.items}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory