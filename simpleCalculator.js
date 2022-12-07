const addNumbers = (numbers) => {
  if (!numbers) return 0
  if (typeof numbers !== "string") return

  const parsed = numbers
    .replaceAll(" ", "")
    .split(",")
    .map((item) => parseInt(item))

  if (parsed.length > 2) throw new Error("Too many numbers")
  parsed.forEach((item) => {
    if (item > 2 || item < 0) throw new Error("Wrong number")
  })
  const result = parsed.reduce((acc, curr) => (acc += curr), 0)

  return result
}

addNumbers("1, 2")

module.exports = addNumbers
