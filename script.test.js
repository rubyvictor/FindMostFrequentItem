const find_most_frequent = require("./script");

describe("function test", () => {
  it("should return the most frequent item in an array entered into the fn params", () => {
    const arr = [1, 1, "1", "1", "1", 2, 2, 3, "1", -4, -4, -4];
    expect(find_most_frequent(arr)).toEqual("1");
  });
});
