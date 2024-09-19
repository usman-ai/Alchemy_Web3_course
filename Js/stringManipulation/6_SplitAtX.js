function splitAtX(string) {
  const divider = string.indexOf("x");
  const firstHalf = string.slice(0, divider);
  const secondHalf = string.slice(divider + 1);
  // This is the answer in shortform
  // return (a.length > b.length) ? a : b;
  if (firstHalf.length >= secondHalf.length) {
    return firstHalf;
  } else {
    return secondHalf;
  }
}

module.exports = splitAtX;
