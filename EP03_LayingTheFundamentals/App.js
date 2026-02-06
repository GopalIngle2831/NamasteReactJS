import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement() => ReactElement - JS Object => HTMLElement

const heading = React.createElement(
  "h1", 
  {id: "heading"}, 
  "Namaste React 🚀"
)

//JSX - It is not HTML or XML inside JS, it is HTML or XML like syntax in JS
//ReactElement using JSX - Note that React and JSX are different, JSX is not the part of React
//JSX => ReactElement (JSX is converted in core ReactElement using babel)
//JSX is transpiled before it reaches the JS engine through babel which is managed by parcel
//JSX => React.createElement() => ReactElement - JS Object => HTMLElement


const jsxHeading = <h1 className="head" id="heading ">Namaste React using JSX 🚀</h1>

const jsxHeading2 = (
  <h1 className="head" id="heading ">
    Namaste React using JSX 🚀
  </h1>
);
// If we use multiple lines in jsx then wrap it in (), for single line no need to give () 
// () is use only for understanding our JSX code written in multiple lines, the whole JSX inside () is treated as a single expression in JS

//React Components
//1) Class Based Component - OLD way
//2) Functional Component - NEW way

// React Functional Component - Just a normal JS function 
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>
}; 
//This is a react functional component which is just a normal JS function which returns JSX
//As we know that the piece of code written in JSX is converted to react element (React.createElement()) at the end of the day then we can say that react functional component returns react element
//Please note that always start the name of react functional component with capital letter, it is the rule for react functional component

const HeadingComponent2 = () => (<h1>Namaste React Component</h1>);
//This is also same as the above only difference is we don't need to write return here because arrow function can return single expression automatically without using return keyword, and for JSX the whole code inside () is a single expression so we can use multiple lines of JSX inside () and return it without using return keyword

const HeadingComponent3 = () => <h1>Namaste React Component</h1>;
//For single line of JSX, () is not mandatory to write

const Card1 = () => (
  <div>
    <h2>Course</h2>
    <button>Buy</button>
  </div>
);

const Card2 = () => {
  return (<div>
    <h2>Course</h2>
    <button>Buy</button>
  </div>)
};

//Card 1 and Card2 are also other ways to write react functional components 

const One = () => (
  <div id="one" className="one">
    <h1>Hello this is Namaste React one....</h1>
  </div>
)

//Component Composition
const Two = () => (
  <div className="two">
    <One/>
    <One></One>
    <h1>Hello this is Namaste React two....</h1>
  </div>
)
//Here we insert react functional component into other react functional component this is known as component composition
//Both <One/>
//and <One></One>
//are same thing

const HeadingComponentNormal = function(){
  return <h1>Namaste React Functional Component</h1>
}; 

const HeadingComponentNormal2 = function(){
  return (
  <div className="normal">
    <h1>Namaste React Functional Component</h1>
  </div>
  )
}; 
//This is react functional components using normal JS functions

const num = 10
const BeautyofJSX = () => (
  <div className="beauty">
    <h1>Hello this is Namaste React & BeautyofJSX....</h1>
    {num} 
    {heading}
    {jsxHeading}
    {One()}
  </div>
)
//You can write any piece of JS code inside this {} inside JSX, WOW!
//As a normal JS variable is holding our react element then we can add our react element directly inside this {}
//We can call React functional component like normal function using {One()}, but React will not treat it as a component, it will only render the JSX element returned by the function
//<One/> → React sees component and manages it, {One()} → React sees only the React element returned by the function

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(jsxHeading); //This is how we render a react element

// root.render(<HeadingComponent/>) //This is how we render a react functional component

// root.render(<Two/>)

root.render(<BeautyofJSX/>)