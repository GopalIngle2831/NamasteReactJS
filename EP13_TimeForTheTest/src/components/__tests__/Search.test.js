import Body from "../Body"
import {fireEvent, render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/restaurantListMocks.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"

// Mocking the global fetch function used inside the Body component.
// Normally, fetch makes a real API call to get restaurant data.
// In testing, we override (replace) it with a fake (mock) function using jest.fn().

// This mock fetch returns a resolved Promise (like a real API call).
// Inside it, we return an object with a json() method,
// because actual fetch responses also have a .json() method.

// The json() method again returns a Promise that resolves to MOCK_DATA,
// which is our predefined dummy data stored in restaurantListMocks.json.

// This ensures:
// 1. No real network call is made during testing
// 2. Tests run faster and consistently
// 3. We have full control over the data used in the test

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})


it("Should render the body component with search input field", async () => {

    // Wrapping render inside async act()
    // act() ensures that all React state updates, effects (like useEffect),
    // and re-renders are completed before we make assertions.

    // We use async because the Body component performs asynchronous work
    // (like calling fetch inside useEffect).

    // await ensures that we wait for all Promises (API call + state updates)
    // to resolve before moving ahead in the test.

    // Without act + await:
    // - React updates may still be pending
    // - Test might fail or behave unpredictably

    // In short:
    // act() → handles React updates
    // async/await → handles asynchronous operations (like fetch)

    await act( async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>   
        )
    } )

    // Get the search input field using its placeholder text
    const input = screen.getByPlaceholderText("Search restaurants...");

    // Simulate user typing "pizza" into the input field
    // This triggers onChange and updates searchText state
    fireEvent.change(input, {target: {value: "pizza"}})

    // After state update, component re-renders and filters restaurants
    // Get all restaurant cards after filtering
    const filteredCards = screen.getAllByTestId("resCard");

    // Verify that only 4 restaurants match "pizza"
    expect(filteredCards.length).toBe(4);

})