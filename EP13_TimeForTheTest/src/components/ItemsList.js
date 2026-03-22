import { useDispatch } from "react-redux"; 
import { addItem } from "../utils/cartSlice";

const ItemsList = (props) => {
    const {items} = props
    console.log(items);
    
    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

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
                        <button className="border p-1 cursor-pointer rounded bg-pink-300" onClick={() => handleAddItem(item)}>Add +</button>
                    </div>
                    </div>
                ))}

        </div>
    )
}

export default ItemsList