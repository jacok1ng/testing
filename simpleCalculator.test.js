const addNumbers = require("./simpleCalculator")

describe("simpleCalculator test", () => {
  test("empty string", () => {
    expect(addNumbers("")).toBe(0)
  })
  test("single parameter", () => {
    expect(addNumbers("2")).toBe(2)
  })
  test("Test new line", () => {
    expect(addNumbers("1\n2,3")).toBe(6)
  })
  test("string '1, 2'", () => {
    expect(addNumbers("1, 2")).toBe(3)
  })
  test("Throw error", () => {
    expect(addNumbers("1, 2, 1, 2")).toBe(6)
  })
})
