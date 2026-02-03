import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {}, [
  React.createElement("h1", { key: "h1" }, "This is Namaste React 🚀"),
  React.createElement("h2", { key: "h2" }, "Heading 2"),
  React.createElement("h3", { key: "h3" }, "Heading 3")
]);

console.log(parent); 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent) 