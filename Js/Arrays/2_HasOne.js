function hasOne(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      return true;
    }
  }
  return false;
}

module.exports = hasOne;
