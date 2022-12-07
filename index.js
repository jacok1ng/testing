class Kalkulator {
  static add(a, b) {
    return a + b
  }
  static subtract(a, b) {
    return a - b
  }
  static multiplication(a, b) {
    return a * b
  }
  static division(a, b) {
    return a / b
  }
}

const addPropertyToObject = (obj, property) => {
  if (!property || typeof property !== "object") return obj
  return { ...obj, ...property }
}

module.exports = { Kalkulator, addPropertyToObject }
