import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [btnName, setbtnName] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
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