import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const Grocery = lazy(() => import("./components/Grocery"))
//React.lazy is used for code splitting.
//This will load the Grocery component only when it is needed (on demand),
//instead of loading it in the main bundle.
//Grocery will come with different bundle on demand.
//It improves performance by reducing initial bundle size.
//By doing this we can split our code in different bundles making our app work faster.

const AppLayout = () => {   

    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
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
                    /*
                    Suspense is used with React.lazy().
                    While the Grocery component is being loaded (dynamically),
                    the fallback UI will be shown.

                    Here, "Loading..." will appear
                    until the Grocery component finishes loading.
                    */
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