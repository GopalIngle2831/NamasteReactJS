import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listofRestaurant, setListofRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [showTopRated, setShowTopRated] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("http://localhost:4000/api/restaurants");
        const json = await data.json();
        setListofRestaurant(json);
    };

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return (
            <div className="text-center mt-20 text-xl font-semibold">
                Looks like you are offline....
            </div>
        );
    }

    if (listofRestaurant.length === 0) {
        return <Shimmer />;
    }

    const filteredRestaurants = listofRestaurant
        .filter((res) =>
            res.name.toLowerCase().includes(searchText.toLowerCase())
        )
        .filter((res) =>
            showTopRated ? res.rating > 4.5 : true
        );

    return (
        <div className="body">
            <div className="filter flex p-4 items-center justify-between">
                <div className="search flex items-center">
                    <input
                        type="text"
                        className="search-box border p-2 mx-2 w-100 rounded-lg"
                        placeholder="Search restaurants..."
                        value={searchText}
                        onChange={(e) => {
                            setsearchText(e.target.value);
                        }}
                    />
                </div>
                <button
                    className="filter-btn border px-4 py-2 rounded-xl bg-green-100 cursor-pointer"
                    onClick={() => {
                        setShowTopRated(!showTopRated);
                    }}
                >
                    {showTopRated ? "Show All" : "Top Rated Restaurant"}
                </button>
            </div>
            <div className="restaurant-container flex flex-wrap justify-center gap-4">
                {filteredRestaurants.map((restaurant) => (
                    <Link to={"/restaurants/" + restaurant.id} key={restaurant.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;