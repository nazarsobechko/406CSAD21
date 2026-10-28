const { add } = require("../src/add");

describe("BasicAddition", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
