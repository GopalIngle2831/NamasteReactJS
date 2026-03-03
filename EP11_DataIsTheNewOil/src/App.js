import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet, useSearchParams} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";


const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {   

    const [userName, setUserName] = useState()

    //Authentication
    useEffect(() => {
        //Make an API call for username
        const data = {
            username: "Gopal"
        }

        //Update the username after authentication
        setUserName(data.username)

    }, [])

    return (
        //UserContext.Provider makes loggedInUser available to all components wrapped inside it (Header, Outlet, Footer, etc.)
        //Whenever loggedInUser (userName) state updates,
        //Provider automatically passes the new value,
        //and all components using useContext(UserContext)
        //will re-render with updated data.
        <UserContext.Provider value={{loggedInUser: userName}}>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="grow"><Outlet /></div>
                <Footer />
            </div>
        </UserContext.Provider>
        //Only components wrapped inside UserContext.Provider
        //will receive the updated loggedInUser value.
        //Components outside the Provider will use the default value.


        //Important case
        /** 
            ----Outside:- default value
            <UserContext.Provider value={{loggedInUser: userName}}>
            ----Inside this:- userName value
                <div className="flex flex-col min-h-screen">
                    <UserContext.Provider value={{loggedInUser: "Elon Musk"}}
                    ----Inside this:- Elon Musk value
                        <Header />
                    </UserContext.Provider>
                    <div className="grow"><Outlet /></div>
                    <Footer />
                </div>
            </UserContext.Provider> 
            
        */
    )
}

const appRouter = createBrowserRouter([ 
    {
        path: "/",  
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/> 
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<div>Loading....</div>}>
                    <Grocery/></Suspense>
            },
            {
                path: "/restaurants/:resId", 
                element: <RestaurantMenu/> 
            }
        ],
        errorElement: <Error/> 
    } 
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)