var leapYears = function(year) {
  function checkIfCentury() {
    return year % 100 === 0;
  }

  function checkCenturyLeap() {
    if (year >= 400 && year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }

  function checkNonCenturyLeap() {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }

  function mainCheck() {
    if (checkIfCentury()) {
      return checkCenturyLeap();
    } else {
      return checkNonCenturyLeap();
    }
  }

  return mainCheck();
}

module.exports = leapYears
