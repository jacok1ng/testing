const addNumbers = require("./simpleCalculator")

describe("simpleCalculator test", () => {
  test("empty string", () => {
    expect(addNumbers("")).toBe(0)
  })
  test("single parameter", () => {
    expect(addNumbers("2")).toBe(2)
  })
  test("string '1, 2'", () => {
    expect(addNumbers("1, 2")).toBe(3)
  })
  test("Throw error", () => {
    expect(() => addNumbers("1, -2")).toThrow()
  })
  test("Throw error", () => {
    expect(() => addNumbers("1, 5")).toThrow()
  })
  test("Throw error", () => {
    expect(() => addNumbers("1, 5, 6")).toThrow("Too many numbers")
  })
})
