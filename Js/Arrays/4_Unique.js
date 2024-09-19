function unique(array) {
  let arrayUnique = [];
  for (let i = 0; i < array.length; i++) {
    if (arrayUnique.indexOf(array[i]) === -1) {
      arrayUnique.push(array[i]);
    }
  }
  return arrayUnique;
}

module.exports = unique;
