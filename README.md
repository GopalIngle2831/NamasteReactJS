# Namaste React 🚀

# Parcel 🔥
- Dev Built
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - Written in cpp (Node.js runs JavaScript, but it can extend its power by using compiled C++ native modules when low-level speed or OS access is required)
- Caching - Faster builds 
- Image Optimisation
- Minification
- Bundling
- Compressing
- Consistent hashing
- Code splitting
- Differential bundling - To supports older browsers also
- Diagnostic
- Error Sugestions
- Can also host your app on HTTPs if needed
- Tree shaking - remove unused code
- Creates different bundles for dev (development) and build (production)

# NamasteFood
/* 
- Header
    - Logo
    - Nav Items
- Body
    - Search
    - Restaurant Container
        - Restaurant Cards
            - Img
            - Name of Restaurant
            - Rating
            - Cuisines
            - Delivery time
- Footer
    - Copyright
    - Links
    - Address
    - Contact Info
*/

# Export and Import - There are two types of export and import
- Default - For single variable/component export/import
- Named - For multiple variable/component export/import 

# React Hooks
- Normal JS utility Functions
- useState() - Superpowerful state variable in react 
- useEffect()

# React IMP
- Virtual DOM - Representation of Actual DOM not an Actual DOM, Virtual DOM is basically a JavaScript Object representation of Real DOM.
- Diff Algo - Diffing is the process where, at every re-render, React compares the previous Virtual DOM with the new Virtual DOM to find the differences (changes), and it is a part of the reconciliation process.
- Reconciliation -> Reconciliation is the complete process where, at every re-render, React uses diffing results to efficiently update the real DOM by applying only the required changes.
- React Fibre -> React Fiber is the internal rendering engine of React that manages how components are updated, prioritized, and rendered efficiently for better performance and smoother UI updates. 

This all comes in React Fibre:-

    1️⃣ Diffing Algorithm

    👉 Compares old vs new Virtual DOM
    👉 Finds what changed

    2️⃣ Reconciliation

    👉 Applies diff result
    👉 Decides what to update in real DOM

    3️⃣ Scheduler 

    👉 Decides update priority
    Example:
    ✔ Button click → High priority
    ✔ Background data → Low priority

    4️⃣ Incremental Rendering

    👉 Breaks rendering into small tasks
    👉 Prevents UI freeze

    5️⃣ Work Units (Fiber Nodes)

    👉 Each component becomes Fiber node
    👉 Helps React track work

    6️⃣ Pause / Resume Rendering

    👉 React can pause work
    👉 Resume later for smooth UI

# Some important concepts
- Monolithic Architecture:-
    A software design where the whole application is built as one single unit. All modules (UI, business logic, database) are tightly connected and deployed together.

- Microservices Architecture:-
    A software design where the application is divided into small independent services. Each service handles one feature and can be developed, deployed, and scaled separately.

- Separation of Concern (SoC):-
    A design principle that means divide a program into different sections, where each section handles a specific responsibility (like UI, data, logic).

- Single Responsibility Principle (SRP):-
    A design rule that means one class or module should have only one job or responsibility. If something changes, only one part of code should need modification.  

# 2 types of Routing in Web Apps
- Client Side -> URL changes are handled in the browser by JavaScript (React Router) without reloading the page.
- Server Side -> Every URL change sends a request to the server and the page is reloaded with new HTML.

# Difference between Functional Component and Class based Component in React

   ================= RENDER & RE-RENDER (FUNCTIONAL COMPONENT) =================

-> Initial Render:
- root.render(<App />) calls the function component
- The function executes and returns JSX
- React creates Virtual DOM and updates the Real DOM

-> Re-render:
- Happens when state or props change
- React calls the function again
- New JSX is returned
- React compares old and new Virtual DOM (diffing)
- Only changed parts are updated in the Real DOM


   ================= RENDER & RE-RENDER (CLASS COMPONENT) =================

-> Initial Render:
- root.render(<App />) creates an instance of the class component
- React calls the render() method
- render() returns JSX
- React creates Virtual DOM and updates the Real DOM

-> Re-render:
- Happens when setState() or props change
- React calls render() again
- New JSX is returned
- React performs diffing (reconciliation)
- Only changed parts are updated in the Real DOM

# React Lifecycle
React follows the same working for both class and functional components.

Render Phase (Top → Down):
Parent renders first, then child components render to build the UI tree (Virtual DOM).

Commit Phase (Bottom → Up):
React mounts all components and updates the real DOM,
then runs side effects (componentDidMount / useEffect([])) starting from children and moving up to the parent.

Re-render:
No new instance or state is created.
Class components reuse the same instance.
Functional components recreate variables, but React preserves state.

Summary:
Render → top to bottom
Side effects → bottom to top
State → updated, not recreated

----> In the render phase, React builds the Virtual DOM (UI blueprint)
----> In the commit phase, React mounts all components, updates the real DOM and then runs side effects

----> React first finishes rendering all parents and children, then it updates the real DOM in one commit, after the DOM is updated, React runs side effects (componentDidMount / useEffect)

Examples:-

===== CLASS COMPONENT ORDER (Parent + Two Children) =====
                Render Phase (Top → Down):
                Parent Constructor
                Parent Render
                First Child Constructor
                First Child Render
                Second Child Constructor
                Second Child Render
                Commit Phase (Bottom → Up):
                First Child componentDidMount
                Second Child componentDidMount
                Parent componentDidMount

Note:- Sibling order is preserved (NOT reversed), “Bottom → up” means by depth, not reverse sibling order

--------------------------------------------------------
===== FUNCTIONAL COMPONENT ORDER (Parent + Two Children) =====
                Render Phase (Top → Down):
                Parent function executes
                First Child function executes
                Second Child function executes
                Commit Phase (Bottom → Up):
                First Child useEffect([])
                Second Child useEffect([])
                Parent useEffect([])

Note:- Sibling order is preserved (NOT reversed), “Bottom → up” means by depth, not reverse sibling order

-> React keeps sibling order the same to ensure predictable and consistent UI behavior, React keeps siblings in the same order so the UI behaves predictably, Running components in JSX order avoids confusion and unexpected side effects


# Important
- Parcel bundles our code in one final single js file and browser executes that single js file only
but the problem is when our app is big then the file size increases and bundling it in single file makes it slow performative, slow working that is why we do the following thing like

- Chunking
- Code Splitting
- Dynamic Bundling
- Lazy Loading
- On demand loading
- Dynamic import

    This all are same....
    It break downs our app in small chunks making it faster 

    Example:- In makeMytrip website as it is so big, lets say there will be different bundles for the flights, hotel booking, Buses, Cabs etc. having so many components in each bundle.


# Redux Toolkit (RTK)
- Install library (redux toolkit, react redux)
- Build our store
- Connect store to our app
- Create a slice (cartSlice)
- dispatch (action)
- selector

# Very Important React Core Concepts

===============================
STATE UPDATE & IMMUTABILITY NOTES
===============================

🔵 1. React Re-render Rule

React re-renders when:

    OldReference !== NewReference

React checks reference (memory address), NOT deep values.


--------------------------------
🔴 WRONG (Mutable - Same Reference)
--------------------------------

const [list, setList] = useState([]);

list.push("Pizza");        // ❌ Directly modifying existing array
setList(list);             // ❌ Passing same reference

Here:
Old array reference === New array reference

React may skip re-render because reference didn't change.


--------------------------------
✅ CORRECT (Immutable - New Reference)
--------------------------------

const [list, setList] = useState([]);

setList([...list, "Pizza"]);   // ✅ New array created

Here:
Old reference !== New reference

React detects change → Component re-renders.


--------------------------------
🔵 Replacing Entire State
--------------------------------

const json = [{ id: 1 }, { id: 2 }];

setList(json);   // ✅ Works if json is a new array

Why?
Because json is a new reference.


--------------------------------
🔴 Object Mutation Example (Wrong)
--------------------------------

const [user, setUser] = useState({ name: "" });

user.name = "Gopal";   // ❌ Mutating existing object
setUser(user);         // ❌ Same reference

React may not detect change.


--------------------------------
✅ Object Immutable Update (Correct)
--------------------------------

setUser({ ...user, name: "Gopal" });  // ✅ New object

New reference created → React re-renders.


--------------------------------
🔵 Primitive Example (String)
--------------------------------

const [name, setName] = useState("");

setName("Gopal");  // ✅ Always safe

Why?
Primitives (string, number, boolean) are naturally immutable.
They are replaced, not mutated.


--------------------------------
🔥 Final Rule
--------------------------------

Always pass a NEW reference to state update functions.

Mutable  → Same reference → No reliable re-render
Immutable → New reference → Proper re-render

# Types of testing (Developer)
- Unit Testing
- Integration Testing
- End to End Testing - e2e Testing

# Setting up testing in our react app
- Install react testing library
- Install jest
- Install babel dependencies (jest along with babel)
- Configure babel
- Configure jest (npx create-jest)
- Install jsdom library
- Install @babel/preset-react to make jsx work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom

- Note:- As parcel already uses babel and has it configuration but we have to use our own babel configuration (babel.config.js) in order to use it with jest for testing then we need to do some changes, for that we add a file (.parcelrc) and paste some code there to disable default babel transpilation in parcel.

- Note:- Jest can be used to test both React components and normal JavaScript functions. React Testing Library is specifically used for testing React components and their UI behavior, while Jest alone is sufficient for testing regular JavaScript logic or utility functions.

# Testing Setup
	•	React Testing Library – Used to test React components by simulating user interactions and verifying UI behavior.
	•	Jest – A JavaScript testing framework used to run and manage test cases.
	•	Babel – Used to transpile modern JavaScript into compatible JavaScript so that Jest can execute the code.
	•	babel-jest – Allows Jest to transform JavaScript files using Babel before running tests.
	•	@babel/core – The core engine responsible for transpiling JavaScript code.
	•	@babel/preset-env – Converts modern JavaScript features into syntax supported by the testing environment.
    •	Jest Configuration – A Jest configuration file is created to define how tests are discovered, executed, and processed in the project.
    •	jsdom – Provides a browser-like environment so Jest can test DOM-based React components.
    •	@babel/preset-react – Enables Babel to transform JSX into standard JavaScript so that Jest can understand and execute React component test cases.
    •	@testing-library/jest-dom – Provides custom matchers (like toBeInTheDocument()) to make DOM assertions more readable and expressive in tests, working on the DOM created by jsdom.