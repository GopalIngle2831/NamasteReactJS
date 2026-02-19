import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => { 
    const {resData} = props
    const {info} = resData
    const {id, name, cloudinaryImageId, locality, areaName, costForTwo, avgRating} = info

    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" src={CDN_URL + cloudinaryImageId} onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x200?text=No+Image"
                }}></img>
            <h3>{name}</h3>
            <h5>{avgRating}</h5>
            <h5>{areaName}</h5 >
            <h5>{locality}</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
} 

export default RestaurantCard;