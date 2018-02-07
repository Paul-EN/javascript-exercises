var repeatString = function(str, num) {
  let newString = '';

  if (num > 0) {
    for (let i = 0; i < num; i++) {
      newString = newString.concat(str);
    }
    return newString;
  } else if (num === 0) {
    return '';
  } else {
    return 'ERROR';
  }
}

module.exports = repeatString
