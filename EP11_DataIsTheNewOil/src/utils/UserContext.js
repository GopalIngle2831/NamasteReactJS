import { createContext } from "react";

//Used to create a global data store so components can share user data
//without passing props manually at every level
const UserContext = createContext({
    loggedInUser: "Default User" //default value if no Provider is used
})

export default UserContext; 

//createContext is a React feature used to share data between components without passing props manually at every level.

//We use props for passing data from parent to child.
//Context is not used for everything — it is mainly for global shared data.
//Props are better for normal component communication.
//We can use Context for everything, but for simplicity and clean code we use props for normal parent-child data.
//Context is mainly used for global shared data.


//Functional Component
//We access the UserContext data through useContext() hook.

//Class Based Component
//As there is no hook concept, we access the UserContext data like,
//          <UserContext.Consumer>
//                {(data) => console.log(data)} ....callback function inside component to access data
//          </UserContext.Consumer>