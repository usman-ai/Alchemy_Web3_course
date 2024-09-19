function endsWithX(string) {
  if (string[string.length - 1].toUpperCase() === "X") {
    return true;
  } else {
    return false;
  }
}

module.exports = endsWithX;
