import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer  from "./Shimmer";

const Body = () => {
    const [listofRestaurant, setListofRestaurant] = useState([]); //This list will always use to update or filter because every time we need full list to update or filter, this listofRestaurant will not updated
    const [filteredRestaurant, setfilteredRestaurant] = useState([]); //This list is use to render 

    const [searchText, setsearchText] = useState("") //For the input box, the value will change so we need state variable

    useEffect(() => {
        fetchData();
    }, []) 
    //It takes 2 arguments, one is callback function and other is dependency array
    //The callback function is executed once the component is rendered in which we used useEffect. 
    //Here once the Body component is rendered the callback function inside useEffect is called automatically.

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.769223219109158&lng=76.57429534004214&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json)

        //Optional chaining
        //Find the restaurant card dynamically
        const restaurantCard = json?.data?.cards?.find( (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setListofRestaurant(restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setfilteredRestaurant(restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    }

    //Conditional Rendering
    if(listofRestaurant.length === 0){
        return (
            <Shimmer/> 
        ); 
    }
    //When the listOfRestaurant is empty this shimmer UI will be rendered,  and after rendereing this the callback function inside useEffect will make api call and then listOfRestaurant gets updated and the component is re-rendered again with updated listOfRestaurants
    //Loads -> Render (Shimmer UI) -> API call -> Re-Render (Actual UI)

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value) 
                        //This is a controlled input.
                        //When the user types, onChange updates the React state.
                        //React re-renders the whole component using this state.
                        //So the value can be used to update any part of the UI.

                        //Without React state, the browser controls the input.
                        //The browser updates only the input field’s DOM value.
                        //That value cannot be used to re-render or update other parts of the component.
                    }}></input>
                    <button onClick={() => {
                        //Filter the restaurant list according to the search and update the UI
                        //Need the searchText
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