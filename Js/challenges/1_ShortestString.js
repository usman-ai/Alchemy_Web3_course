function shortestString(str1, str2) {
  if (str1.length < str2.length) {
    return str1;
  } else {
    return str2;
  }
}

module.exports = shortestString;
