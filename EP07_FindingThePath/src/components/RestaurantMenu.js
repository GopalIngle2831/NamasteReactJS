import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null)

    const {resId} = useParams()
    //useParams() reads dynamic values from the URL, resId gets the value from the route /restaurants/:resId

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch("http://localhost:4000/api/restaurants/")
        const json = await data.json()
        console.log(json);
        
        setresInfo(json)
    }
    if (resInfo===null) return <Shimmer/>

    const {name, menu} = resInfo[resId-1]
    //-1 is used because array indexing starts from 0, while restaurant ids in the API start from 1

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