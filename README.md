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