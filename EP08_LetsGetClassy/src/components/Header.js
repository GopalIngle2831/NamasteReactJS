import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 


const Header = () => {
    const [btnName, setbtnName] = useState("Login")
    console.log("Header renders")

    useEffect(() => {
        console.log("useEffect called")
    })

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