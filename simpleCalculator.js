const parseNumbers = (numbers, separator) => {
  if (separator !== ",")
    return numbers
      .replaceAll(" ", "")
      .slice(4)
      .split(separator)
      .map((item) => parseInt(item))
  else
    return numbers
      .replaceAll(" ", "")
      .replaceAll("\n", ",")
      .split(",")
      .map((item) => parseInt(item))
}

const longerSeparator = (numbers) =>
  numbers.indexOf("\n") - 2 === 1 ? false : true

const addNumbers = (numbers) => {
  if (!numbers) return 0
  if (typeof numbers !== "string") return

  let separator = ","

  if (longerSeparator(numbers)) {
    const potentialSeparators = numbers.slice(2, numbers.indexOf("\n"))
    const splitedPotentialSeparators = potentialSeparators
      .replaceAll("[", "")
      .trim()
      .split("]")

    const finalPotentialOperators = splitedPotentialSeparators.filter(
      (_, index) => index < splitedPotentialSeparators.length - 1
    )
    let newNumbers = numbers.slice(numbers.indexOf("\n") + 1)

    finalPotentialOperators.forEach(
      (sep) => (newNumbers = newNumbers.replaceAll(sep, ","))
    )

    numbers = newNumbers
  } else {
    if (numbers.indexOf("//") !== -1) separator = numbers[2]
  }

  const parsed = parseNumbers(numbers, separator).filter((item) => item < 1000)

  for (const numb of parsed) {
    if (numb < 0)
      throw new Error(
        `Tylko liczby dodatnie są dozwolone. Podane liczby: ${parsed.filter(
          (item) => item < 0
        )}`
      )
  }

  const result = parsed.reduce((acc, curr) => (acc += curr), 0)

  return result
}

console.log("result", addNumbers("//[zzz]\n1zzz2zzz4zzz-1zzz-6"))

module.exports = addNumbers
