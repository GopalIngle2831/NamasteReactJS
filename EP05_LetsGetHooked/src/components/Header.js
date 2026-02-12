import {LOGO_URL} from "../utils/constants"; //Named import -> For named export

const Header = () => {
    return (
        <div className="header">
             <div className="logo-container"> 
                <img className="logo" src={LOGO_URL}></img>
             </div>
             <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
             </div>
        </div>
    )
}

export default Header;