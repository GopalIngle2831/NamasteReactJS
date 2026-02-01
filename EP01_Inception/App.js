// const heading = React.createElement(
//     "h1", 
//     {id: "heading", xyz: "abc"}, 
//     "Hello World from React"
// )
// console.log(heading); //Object
// const root = ReactDOM.createRoot(document.getElementById("root")) 
// root.render(heading)

const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [React.createElement(
        "div", 
        {id: "child"}, 
        [React.createElement(
            "h1", 
            {id: "h1tag1"},
            "This is H1 tag"
        ),
        React.createElement(
            "h2", 
            {id: "h2tag1"},
            "This is H2 tag"
        )] //Array for siblings
    ),
    React.createElement(
        "div", 
        {id: "child2"}, 
        [React.createElement(
            "h1", 
            {id: "h1tag2"},
            "This is H1 tag"
        ),
        React.createElement(
            "h2", 
            {id: "h2tag2"},
            "This is H2 tag"
        )] //Array for siblings
    )]
)
console.log(parent); //Object
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

//ReactElement(JS Object) => HTML(Actual DOM)

//          React Element (JS Object)
//                  ↓
//          Virtual DOM (Tree of Elements)
//                  ↓
//          ReactDOM converts & updates
//                  ↓
//          Real DOM (Browser HTML)
//                  ↓
//          Browser renders UI 