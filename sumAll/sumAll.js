var sumAll = function(x, y) {
  function verifyParameters() {
    if (typeof x === 'number' && typeof y === 'number' && x >= 0 && y >= 0) {
      return true;
    } else {
      return false;
    }
  }

  function leastGreatest() {
    let sortedArray = [];
    if (x <= y) {
      sortedArray.push(x);
      sortedArray.push(y);
    } else if (x > y) {
      sortedArray.push(y);
      sortedArray.push(x);
    }

    return sortedArray;
  }

  function sum() {
    let result = 0;
    if (verifyParameters()) {
      for (let i = leastGreatest()[0]; i <= leastGreatest()[1]; i++) {
        result += i;
      }
    } else {
      return 'ERROR';
    }

    return result;
  }

  return sum();
}

module.exports = sumAll
