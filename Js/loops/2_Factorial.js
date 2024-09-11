function factorial(n) {
  let product = 1;
  for (i = n; i > 1; i--) {
    product = product * i;
  }
  return product;
}

module.exports = factorial;
