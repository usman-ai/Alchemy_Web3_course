function isAllX(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() !== "X") {
      return false;
    }
  }
  return true;
}

module.exports = isAllX;
