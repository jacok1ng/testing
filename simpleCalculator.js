const addNumbers = (numbers) => {
  if (!numbers) return 0
  if (typeof numbers !== "string") return

  const parsed = numbers
    .replaceAll(" ", "")
    .replaceAll("\n", ",")
    .split(",")
    .map((item) => parseInt(item))

  const result = parsed.reduce((acc, curr) => (acc += curr), 0)

  return result
}

console.log(addNumbers("1\n2,3"))

module.exports = addNumbers
