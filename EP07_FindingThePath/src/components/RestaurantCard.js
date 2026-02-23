
const RestaurantCard = (props) => { 
    const {resData} = props
    const {id, name, area, locality, rating, image, costForTwo} = resData

    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" src={image}></img>
            <h3>{name}</h3>
            <h5>{rating}</h5>
            <h5>{area}</h5 >
            <h5>{locality}</h5>
            <h5>{costForTwo} Rs only</h5>
        </div>
    )
} 

export default RestaurantCard;