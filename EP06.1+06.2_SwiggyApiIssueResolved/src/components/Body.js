import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer  from "./Shimmer";

const Body = () => {
    const [listofRestaurant, setListofRestaurant] = useState([]); 
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const [searchText, setsearchText] = useState("")

    useEffect(() => {
        fetchData();
    }, []) 
    

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.769223219109158&lng=76.57429534004214&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        //https://corsproxy.io/? -> Browser does not allow our localhost to call swiggy api directly therefore we use this to bypass CORS and call the swiggy's api.
        const json = await data.json()
        console.log(json)

        const restaurantCard = json?.data?.cards?.find( (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        //We dynamically search the cards array to find the card that contains restaurant data,
        //instead of relying on a fixed index which can change in the API response.
        //Once found, we store the restaurants list in state so the UI can render and filter it safely.

        setListofRestaurant(restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setfilteredRestaurant(restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    }

    if(listofRestaurant.length === 0){
        return (
            <Shimmer/> 
        ); 
    }
   
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value) 
                    }}></input>
                    <button onClick={() => {
                        const filtered_restaurant = listofRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setfilteredRestaurant(filtered_restaurant)
                    }}>Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listofRestaurant.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setfilteredRestaurant(filteredList);
                    }}
                >
                    Top rated restaurant
                </button>
            </div>
            <div className="restaurant-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        resData={restaurant}
                    /> 
                ))}
            </div>
        </div>
    );
};

export default Body;