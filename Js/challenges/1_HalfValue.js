function halfValue(numbers) {
  const halfNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    halfNumbers.push(Math.round(numbers[i] / 2));
  }
  return halfNumbers;
}

module.exports = halfValue;
