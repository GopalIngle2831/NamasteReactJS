//Higher order component (HOC) -> Takes RestaurantCard as a input and returns enhanced RestaurantCard (promoted) as a output
//It is function which takes component as a input and returns component as a output

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded-lg z-10">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

//{...props} means spread all props
//It copies all properties from props object and passes them forward.