export const sum = (a,b) => {
    return a + b;
}

test("Sum function should calculate the sum of two numbers", () => {
    //Test case description: what this test is checking

    const res = sum(4,5);

    //Assertion
    expect(res).toBe(9);
    //expect() checks the result
    //toBe(9) verifies that the returned value is exactly 9

})