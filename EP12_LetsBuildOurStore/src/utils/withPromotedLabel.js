
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
