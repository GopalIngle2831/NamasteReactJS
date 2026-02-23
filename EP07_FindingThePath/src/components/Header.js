import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
//<Link> updates the URL without reloading the page.
//React Router handles navigation and updates only the route content.

const Header = () => {
    const [btnName, setbtnName] = useState("Login")
    console.log("Header renders")

    useEffect(() => {
        console.log("useEffect called")
    })
    //If no dependency array then useEffect will be called on every render
    //If present [] dependency array then it will called only on first render and just once
    //If dependency array is [btnName] then useEffect is called every time btnName is updated 

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
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