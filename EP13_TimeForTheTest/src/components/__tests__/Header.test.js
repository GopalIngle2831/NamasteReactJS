import { Provider } from "react-redux";
import Header from "../Header"
import { render, screen, fireEvent} from "@testing-library/react"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load header component with login button", () => {

    //BrowserRouter is used because Header component uses React Router
    //(like Link, useNavigate, etc.)
    //These features need Router context, otherwise test will crash
    //So we wrap component inside BrowserRouter to provide routing environment
    //Provider is used to give Redux store access
    //Header may use useSelector / useDispatch → needs store

    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    // Different ways to select button

    // getByRole (BEST PRACTICE)
    // - Selects element based on accessibility role
    // - "button" role + visible name "Login"
    // - Closest to how user interacts with UI
    const loginButton = screen.getByRole("button", {name: "Login"})

    // getByText
    // - Selects element by visible text
    // - Works but less reliable than role
    // const loginButton = screen.getByText("Login")

    // getByRole without name
    // - Gets first button only
    // - Not safe if multiple buttons exist
    // const loginButton = screen.getByRole("button")

    expect(loginButton).toBeInTheDocument();

})

it("Should load header component with cart items 0", () => {

    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart (0)")

    expect(cartItems).toBeInTheDocument();

})

it("Should load header component with cart items", () => {

    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/)

    // /Cart/ is a REGULAR EXPRESSION (regex)
    // It means: find any text that contains "Cart"
    // Example matches:
    // "Cart"
    // "Cart (0 items)"
    // "My Cart"
    // "Cart - 2 items"

    // Using regex makes test flexible (not strict exact match)

    expect(cartItems).toBeInTheDocument();

})

it("Should change login button to logout on click in header component", () => {

    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"})

    fireEvent.click(loginButton);

    // fireEvent is used to simulate user actions (like click, input, etc.)
    // Here, fireEvent.click(loginButton) mimics a real user clicking the Login button

    // When this click happens:
    // → The onClick handler inside Header component runs
    // → It updates state (e.g., isLoggedIn = true)
    // → React re-renders the component
    // → UI changes from "Login" → "Logout"
    // After UI change we now check for Logout button

    const logoutButton = screen.getByRole("button", {name: "Logout"})

    expect(logoutButton).toBeInTheDocument();

})

