const { main } = require("../src");

describe("Hello World project", () => {
  test("exports the application entry point", () => {
    expect(main).toEqual(expect.any(Function));
  });
});
