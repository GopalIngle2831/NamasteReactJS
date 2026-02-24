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

    const onlineStatus = useOnlineStatus(); //Custom hook

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ?  "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login-btn" onClick={() => {
                        if(btnName === "Login"){
                            const newName = "Logout"
                            setbtnName(newName)
                        }
                        else{
                            const newName = "Login"
                            setbtnName(newName)
                        }
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;