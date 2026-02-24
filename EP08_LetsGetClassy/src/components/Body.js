import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer  from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listofRestaurant, setListofRestaurant] = useState([]); 
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const [searchText, setsearchText] = useState("")

    useEffect(() => {
        fetchData();
    }, []) 

    const fetchData = async () => {
        const data = await fetch("http://localhost:4000/api/restaurants")
        const json = await data.json()
        console.log(json)

        setListofRestaurant(json);
        setfilteredRestaurant(json);
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
                        const filtered_restaurant = listofRestaurant.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()))
                        setfilteredRestaurant(filtered_restaurant)
                    }}>Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listofRestaurant.filter(
                            (res) => res.rating > 4.5
                        );
                        setfilteredRestaurant(filteredList);
                    }}
                >
                    Top rated restaurant
                </button>
            </div>
            <div className="restaurant-container">
                {filteredRestaurant.map((restaurant) => (
                    <Link to={"/restaurants/" + restaurant.id} key={restaurant.id}><RestaurantCard resData={restaurant}/></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;