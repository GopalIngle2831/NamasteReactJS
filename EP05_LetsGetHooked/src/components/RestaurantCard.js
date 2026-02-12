const RestaurantCard = (props) => { 
    const {resData} = props
    const {resName, cuisines, rating, deliveryTime, src} = resData

    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" src={src}></img>
            <h3>{resName}</h3>
            <h4>{cuisines}</h4>
            <h5>{rating}</h5>
            <h5>{deliveryTime}</h5 >
        </div>
    )
} 

export default RestaurantCard;