import RestaurantCard from "./RestaurantCard";
import {RESTAURANT_LIST} from "../utils/constants"; //Named import -> For named export
import { useState } from "react"; //Here we named import

/* 

React library internally exports many things separately:

React - default export
useState - named export
useEffect - named export
useRef - named export
useContext - named export
useMemo - named export

Think like this the react library exports {
        export default React;
        export function useState();
        export function useEffect();    
    }

Why not get all react from default export, why named exports are used ?
- Named exports are used so you can import only what you need, which helps bundlers remove unused code (tree shaking) and keeps the app smaller and faster.
- They also make imports explicit and safer, reducing mistakes and improving code clarity.

*/

const Body = () => {

    /*
    Normal JS variable
    const listofRestaurant = [
    {
        resName: "Pizza Hut",
        id: 1,
        cuisines: "Italian, Desi Spice, Asian",
        rating: "4.5 ⭐️",
        deliveryTime: "40 minutes",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/65c716f7-09b0-42cb-b70f-3908542620f0_340854.JPG"
    },
    {
        resName: "KFC",
        id: 2,
        cuisines: "Burger, Chicken, Fries",
        rating: "4.8 ⭐️",
        deliveryTime: "35 minutes",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/36fb4603-86ff-4b69-9659-3555340b83c1_640360.JPG"
    },
    {
        resName: "Domino's Pizza",
        id: 3,
        cuisines: "Pizza, Fast Food",
        rating: "4.4 ⭐️",
        deliveryTime: "30 minutes",
        src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg"
    },
    {
        resName: "Burger King",
        id: 4,
        cuisines: "Burger, American",
        rating: "4.3 ⭐️",
        deliveryTime: "32 minutes",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
    },
    {
        resName: "Subway",
        id: 5,
        cuisines: "Healthy, Sandwich",
        rating: "4.2 ⭐️",
        deliveryTime: "28 minutes",
        src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg"
    },
    {
        resName: "McDonald's",
        id: 6,
        cuisines: "Burger, Beverages, Fries",
        rating: "4.6 ⭐️",
        deliveryTime: "25 minutes",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/535fc9f9c135f7982317bbb6a64a1ffc"
    },
    {
        resName: "Haldiram's",
        id: 7,
        cuisines: "Indian, Sweets, Snacks",
        rating: "4.7 ⭐️",
        deliveryTime: "38 minutes",
        src: "https://vectorseek.com/wp-content/uploads/2021/12/1970-Haldirams-Logo-vector.png"
    },
    {
        resName: "Bikanervala",
        id: 8,
        cuisines: "North Indian, Sweets",
        rating: "4.3 ⭐️",
        deliveryTime: "42 minutes",
        src: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Bikanervala_logo.svg/500px-Bikanervala_logo.svg.png"
    },
    {
        resName: "Wow! Momo",
        id: 9,
        cuisines: "Momos, Chinese, Fast Food",
        rating: "4.1 ⭐️",
        deliveryTime: "27 minutes",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108"
    },
    {
        resName: "Barbeque Nation",
        id: 10,
        cuisines: "BBQ, North Indian, Grill",
        rating: "4.6 ⭐️",
        deliveryTime: "50 minutes",
        src: "https://images.seeklogo.com/logo-png/28/1/barbeque-nation-logo-png_seeklogo-287122.png"
    }];
    */

    //Local state variable
    const [listofRestaurant, setListofRestaurant] = useState(RESTAURANT_LIST);

    // This is what useState() is returning us (a array with 2 elements)
    // const arr = useState(RESTAURANT_LIST)
    // const listofRestaurant = arr[0] 
    // const setListofRestaurant = arr[1]

    /* 
    useState returns [listofRestaurant, setListofRestaurant], 
    where listofRestaurant stores the current restaurant data and setListofRestaurant is used to update it. 
    The array passed inside useState is the default (initial) restaurant list when the component loads, and whenever setListofRestaurant updates the data, React re-renders the UI with the new restaurant list.
    The component in which react state variable is present gets re-render (here Body component).

    The formal book defination -> Whenever the state variable updates, react re-renders the component.
    */
 
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                     const filteredList = listofRestaurant.filter(
                        (res) => res.rating > 4.5
                     )
                     setListofRestaurant(filteredList); //Here the listofRestaurant gets updated with filteredList and react automatically re-renders the component with new list
                }}>Top rated restaurant</button>
            </div>
            <div className="restaurant-container">
                {listofRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))}   
            </div>
        </div>
    )
}

export default Body;