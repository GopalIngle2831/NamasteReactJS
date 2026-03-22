//Import render function to render React components in test environment
//Import screen to query elements from the rendered output
import {render, screen} from "@testing-library/react";

//Import the component you want to test
import Contact from "../Contact"

//Import custom matchers like toBeInTheDocument()
import "@testing-library/jest-dom";


    //Define a test case with description
test("Should load Contact component having heading", () => {

    //Render the Contact component into jsdom
    //It renders inside a virtual DOM created by jsdom (not real browser)
    //Internally, it mounts into a div container like document.body
    render(<Contact/>)

    //Query: find an element with role "heading" (like <h1>, <h2>, etc.)
    const heading = screen.getByRole("heading");

    //Assertion
    //Check if the heading is present in the jsdom DOM
    expect(heading).toBeInTheDocument();

})

test("Should load Contact component having text gopalingle31102002@gmail.com", () => {

    render(<Contact/>)

    const mail = screen.getByText("gopalingle31102002@gmail.com");

    expect(mail).toBeInTheDocument();

})

test("Should load Contact component having button", () => {

    render(<Contact/>)

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

})

test("Should load Contact component having all input boxes", () => {

    render(<Contact/>)

    //getAllByRole is used because we expect MULTIPLE elements (input boxes)
    //If we use getByRole, it will fail if more than one element is found
    //getAllByRole returns ALL matching elements as an ARRAY

    const inputBoxes = screen.getAllByRole("textbox");

    //These elements are from the VIRTUAL DOM (jsdom environment, not real browser DOM)
    //Each item in inputBoxes is a virtual DOM node (object)
    //Since multiple inputs exist, we get an array of these objects

    expect(inputBoxes.length).toBe(3);

    // expect(inputBoxes.length).not.toBe(3);

})


//describe is used to group test cases
//Here we group all the test cases for contact page
describe("Contact Page test cases", () => {

    test("Should load Contact component having heading", () => {

    render(<Contact/>)

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

    })

    test("Should load Contact component having text gopalingle31102002@gmail.com", () => {

        render(<Contact/>)

        const mail = screen.getByText("gopalingle31102002@gmail.com");

        expect(mail).toBeInTheDocument();

    })

    test("Should load Contact component having button", () => {

        render(<Contact/>)

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();

    })

    //We can also write it inplace of test there is no difference it is just an alias
    it("Should load Contact component having all input boxes", () => {

        render(<Contact/>)

        const inputBoxes = screen.getAllByRole("textbox");

        expect(inputBoxes.length).toBe(3);

    })

})

