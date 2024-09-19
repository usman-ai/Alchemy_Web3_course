function numberOfKeys(object) {
  let n = 0;
  for (let key in object) {
    n += 1;
  }
  return n;
}

module.exports = numberOfKeys;
