const testFunction = require("./index");

it("adds 3 and 4 to equal 7", () => {
  expect(testFunction(3, 4)).toBe(7);
});
