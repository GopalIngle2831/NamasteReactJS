import { useRouteError } from "react-router-dom"; //Hook given by react-router-dom 
//useRouteError runs only when an error occurs and the errorElement is rendered.
//It is used inside the error component to access details about that error.
//This allows the error UI to show what went wrong.

const Error = () => {
    const err = useRouteError()
    console.log(err);
    
    //It runs when the error page (errorElement) is rendering.
    //Returns the error obj.
    //Gets the error that caused this error page to render.
    //Used to show what went wrong to the user.

    return (
        <div>
            <h1>Oops! Something went wrong....</h1>
            <h3>{err.status}: {err.statusText}</h3>
            <h3>{err.data}</h3>
        </div>
    )
}
export default Error;