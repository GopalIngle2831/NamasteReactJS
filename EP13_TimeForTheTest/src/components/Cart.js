import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="m-2">
                {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between bg-gray-200 mx-50 p-2 my-4 shadow-xl">
                        <span>{item.name}</span>
                        <span>Rs. {item.price}</span>
                    </div>
                ))}
                {cartItems.length === 0 ? (<h1>Please add items....</h1>) : (<button className="border p-2 rounded cursor-pointer m-2" onClick={handleClearCart}>Clear Cart</button>)}
            </div>
        </div>
    )
}

export default Cart;