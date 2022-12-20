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
  test("Numbers over 1000 should be ignored", () => {
    expect(addNumbers("1, 2000")).toBe(1)
  })
  test("Change separator to ;", () => {
    expect(addNumbers("//;\n1;3;1")).toBe(5)
  })
  test("Throw error when numbers are negative", () => {
    expect(() => addNumbers("-3, -4, 6")).toThrow(
      "Tylko liczby dodatnie są dozwolone. Podane liczby:"
    )
  })
})
