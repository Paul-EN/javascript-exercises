var removeFromArray = function(array) {
  let deleteFrom = arguments[0];
  for (let i = 0; i < deleteFrom.length; i++) {
    for (let j = 1; j < arguments.length; j++) {
     	if (deleteFrom[i] === arguments[j]) {
          deleteFrom.splice(i, 1);
          i--;
      } else continue;
    }
  }
  return deleteFrom;
}

module.exports = removeFromArray
