import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"; //Here we can also use ./components/Header.js, but no need to write .js react will treat it as JS file by itself 
import Body from "./components/Body";


const AppLayout = () => {   
    return (
        <div className="app">
             <Header/>
             <Body/> 
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)