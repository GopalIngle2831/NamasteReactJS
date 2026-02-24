import React from "react"; //We need React.Component class it is inside React 

//Class based component in react
//It has the render() method which returns JSX
//The main difference between functional component and class based component is that,
//Functional component returns JSX
//Whereas class based component has render() method which return JSX

class UserClass extends React.Component{ //UserClass is child class of React.Component
    constructor(props){
        //constructor is called automatically when the class component instance is created
        //React creates one instance of the child class (UserClass)
        //props are passed to the constructor during instance creation

        super(props)  
        //this class extends React.Component, so it has a parent class
        //JavaScript requires calling super() in an extended class
        //React creates only ONE instance: the child class (UserClass) instance
        //super(props) runs the parent (React.Component) constructor on this SAME instance
        //the parent constructor initializes `this` and assigns props as this.props
        //no separate parent instance is created
        //after super(props), `this` becomes valid and usable in the child class
        //without super(props), using `this` will cause a JavaScript error

        this.state = {
            count: 0,
            Myname: "Dummy",
            username: "xyx",
            url: "abc",
            avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabOgeMNrSqYJ4c2-kMg0I_QreIqbVVfgvWQ&s"
        }
        //initializes the component state object
        //state belongs to the current class component instance
        //count is set to an initial value of 0
        //state is used to store data that can change over time
        //when state changes using setState(), the component re-renders

        console.log("UserClass Constructor Called");
        
    }

    async componentDidMount(){ //Called after render, that's why we made api call inside this in class based components 
        //We can make this method directly as async to make api call
        console.log("UserClass componentDidMount Called");
        const data = await fetch("https://api.github.com/users/GopalIngle2831") //Github user api call
        const json = await data.json();
        console.log(json);

        this.setState({
            Myname: json.name,
            username: json.login,
            url: json.html_url,
            avatar_url: "https://avatars.githubusercontent.com/u/181389555?v=4"
        }) 
    }

    //Note that componentDidMount called only once after the first render only, that is why we made api call in it

    componentDidUpdate(){
        console.log("componentDidUpdate called"); //It is called after the re-render or updating 
    }

    componentWillUnmount(){
        console.log("componentWillUnmount is called") //componentWillUnmount() is called just before a component is removed (unmounted) from the DOM
    }
    
    render() {
        //render() is called on initial render and re-render
        //this.props contains data passed from parent

        console.log("UserClass Render Called");
        

        const {name, location} = this.props
        const {count, Myname, url, username, avatar_url} = this.state

        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    //Never update state variable directly -> this.state.count = this.state.count + 1 -> Never do like this
                    //Direct state updates do not notify React about the change
                    //React will not trigger a re-render if state is changed directly
                    //setState() tells React that state has changed
                    //React then schedules a re-render and updates the UI correctly
                    this.setState({
                        count: this.state.count + 1
                    })
                    //setState() is used to update the component state variables
                    //reads the current count value from this.state
                    //increments the count by 1
                    //React schedules a re-render on the same component instance
                    //UI updates with the new count value
                }}>Click me</button>
                <div><img src={avatar_url}></img></div>
                <h2>Name: {Myname}</h2>
                {/** `this` refers to the current instance (object) of the class component,
                so we can use this.props anywhere inside our class component to access the data passed from the parent for that instance*/}
                <h3>Username: {username}</h3>
                <h3>URL: {url}</h3>
            </div>
        )
    }
}

export default UserClass;

// ================= RENDER & RE-RENDER (FUNCTIONAL COMPONENT) =================

// Initial Render:
// root.render(<App />) calls the function component
// The function executes and returns JSX
// React creates Virtual DOM and updates the Real DOM

// Re-render:
// Happens when state or props change
// React calls the function again
// New JSX is returned
// React compares old and new Virtual DOM (diffing)
// Only changed parts are updated in the Real DOM



// ================= RENDER & RE-RENDER (CLASS COMPONENT) =================

// Initial Render:
// root.render(<App />) creates an instance of the class component
// React calls the render() method
// render() returns JSX
// React creates Virtual DOM and updates the Real DOM

// Re-render:
// Happens when setState() or props change
// React calls render() again
// New JSX is returned
// React performs diffing (reconciliation)
// Only changed parts are updated in the Real DOM