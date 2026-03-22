import RestaurantCard from "../RestaurantCard"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resCardMocks.json"

it("Should render RestaurantCard component with the props data", () => {
     
    render(<RestaurantCard resData={MOCK_DATA}/>)

    // MOCK_DATA is a dummy (fake) data object used for testing
    // Instead of using real API data, we pass this mock data as props
    // This makes the test:
    // Fast (no API call)
    // Reliable (fixed data, no change)
    // Isolated (testing only this component)

    // resData={MOCK_DATA} means we are giving the component the same data it would normally receive from backend

    const name = screen.getByText("Pizza Hut")

    expect(name).toBeInTheDocument()

})