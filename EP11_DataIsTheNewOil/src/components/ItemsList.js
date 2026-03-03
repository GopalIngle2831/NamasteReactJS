const ItemsList = (props) => {
    const {items} = props
    console.log(items);
    
    return (
        <div>
                {items.map((item, index) => (
                    <div key={index} className="border-b">
                        <div className="flex justify-between mx-5 my-2">
                            <span>{item.name}</span>
                            <span>Rs. {item.price}</span>
                        </div>
                    <div className="text-left mx-5 my-2 text-xs flex justify-between">
                        <span>{item.description}</span>
                        <button className="border p-1 cursor-pointer rounded bg-pink-300">Add +</button>
                    </div>
                    </div>
                ))}

        </div>
    )
}

export default ItemsList