import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"; // We use react-router-dom to handle client-side routing in the app.
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {   
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}
//Outlet is a placeholder for rendering the matched child route component.
//It allows nested routes to display their content inside the parent layout.
//On URL change, the parent layout (AppLayout, Header) stays mounted.
//Only the matched child route inside <Outlet /> is mounted/unmounted.
//If an error occurs, errorElement replaces the entire layout.


const appRouter = createBrowserRouter([ 
    {
        path: "/",   //Parent router
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
                path: "/restaurants/:resId", //:resId part is dynamic, this is how we write it in react route path
                element: <RestaurantMenu/> 
            }
            //:resId is a dynamic URL parameter.
            //Whatever value comes after /restaurants/ in the URL is captured as resId and used inside RestaurantMenu component
        ],
        errorElement: <Error/> 
        //It is to handle the error
        //errorElement defined on the parent route acts as a fallback UI for all child routes when a route mismatch or rendering error occurs.
        //When an error occurs, errorElement replaces the entire AppLayout.
        //The normal layout (Header, Outlet, etc.) is not rendered in this case.
    } 
])
//createBrowserRouter defines different routes and maps URLs to components.
//This allows navigation between pages without reloading the browser. 

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
//RouterProvider connects the router configuration to the React app.
//It listens to URL changes and renders the matching route component.
//This enables navigation without full page reloads.


//               Parent route renders
//                        ↓
//                   Outlet waits
//                        ↓
//         Child route renders inside Outlet
//                        ↓
//      Error? → errorElement replaces everything



//We don't use <a><a/> tag because it reloads the whole page we use <Link> that changes the URL just like manual navigation, but without reloading the page, allowing RouterProvider to render the matching route in appRouter.

//              URL changes (manual OR <Link>)
//                            ↓
//              RouterProvider detects change
//                            ↓
//                    Route is matched
//                            ↓
//                 Outlet content updates
//                            ↓
//                  Page does NOT reload

//If the URL stays the same, React Router does not re-match routes and no routing-based re-render occurs.
//Using <a> causes a full page reload, so the React app and appRouter are recreated, unlike <Link> which keeps routing client-side.
//This is why we called react app as a single page application because only the components changes the page does not reloads or change