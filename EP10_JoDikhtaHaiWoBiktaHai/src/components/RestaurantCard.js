
const RestaurantCard = (props) => { 
    const {resData} = props
    const {id, name, area, locality, rating, image, costForTwo} = resData

    return (
      <div className="restaurant-card m-2 w-60 bg-gray-100 hover:bg-gray-300 rounded-2xl shadow-md hover:shadow-xl border border-transparent hover:border-gray-300 transition duration-300 transform hover:-translate-y-2 overflow-hidden">
        <img className="p-4 restaurant-logo bg-white w-full h-50 object-cover rounded-2xl" src={image} alt={name}/>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>
          <h5 className="text-sm text-green-600 font-semibold mt-1">{rating} ⭐</h5>
          <h5 className="text-sm text-gray-500">{area}</h5>
          <h5 className="text-sm text-gray-500">{locality}</h5>
          <h5 className="text-sm font-medium text-gray-700 mt-2">{costForTwo} Rs only</h5>
        </div>
      </div>
    );
} 

export default RestaurantCard;