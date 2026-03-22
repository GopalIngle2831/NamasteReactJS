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
import {Provider} from "react-redux" 
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {   

    const [userName, setUserName] = useState()

    useEffect(() => {
        const data = {
            username: "Gopal"
        }

        setUserName(data.username)

    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName}}>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <div className="grow"><Outlet /></div>
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart/>
            },
        ],
        errorElement: <Error/> 
    } 
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)