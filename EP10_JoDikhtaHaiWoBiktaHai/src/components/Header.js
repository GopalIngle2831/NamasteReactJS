import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    const [btnName, setbtnName] = useState("Login")
    console.log("Header renders")

    useEffect(() => {
        console.log("useEffect called")
    })

    const onlineStatus = useOnlineStatus(); 

    return (
        <div className="header flex justify-between items-center px-10 py-4 bg-linear-to-r from-pink-100 to-pink-200 shadow-lg sticky top-0 z-50">
            <div className="logo-container flex items-center">
                <img className="logo w-32 rounded-full shadow-md hover:scale-105 transition duration-300 cursor-pointer" src={LOGO_URL} />
                <Link to="/" className="px-4 font-[Poppins] cursor-pointer text-xl font-semibold">NamasteFood</Link>
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex items-center space-x-8">
                    <li className="font-[Poppins] text-lg font-medium">
                        Online: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="font-[Poppins] text-lg font-medium hover:text-pink-400 transition duration-200 cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="font-[Poppins] text-lg font-medium hover:text-pink-400 transition duration-200 cursor-pointer">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="font-[Poppins] text-lg font-medium hover:text-pink-400 transition duration-200 cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="font-[Poppins] text-lg font-medium hover:text-pink-400 transition duration-200 cursor-pointer">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="font-[Poppins] text-lg font-medium hover:text-pink-400 transition duration-200 cursor-pointer">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <button
                        className="font-[Poppins] w-20 login-btn px-4 py-2 rounded-full bg-white shadow-md hover:bg-pink-400 hover:text-white transition duration-300 text-sm cursor-pointer"
                        onClick={() => {
                            if(btnName === "Login"){
                                setbtnName("Logout")
                            } else {
                                setbtnName("Login")
                            }
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;