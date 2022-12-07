const { Kalkulator, addPropertyToObject } = require("./index.js")

describe("Kalkulator test", () => {
  test("Adding", () => {
    expect(Kalkulator.add(1, 2)).toBe(3)
  })
  test("Subtract", () => {
    expect(Kalkulator.subtract(2, 1)).toBe(1)
  })
  test("Multiplication", () => {
    expect(Kalkulator.multiplication(4, 5)).toBe(20)
  })
  test("Division", () => {
    expect(Kalkulator.division(20, 5)).toBe(4)
  })
})

describe("addPropertyToObject", () => {
  test("add {name: 'Erick'} to object", () => {
    expect(
      "name" in addPropertyToObject({ surname: "Dabek" }, { name: "Erick" })
    ).toBeTruthy()
  })
})
