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