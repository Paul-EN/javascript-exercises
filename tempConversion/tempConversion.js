var ftoc = function(f) {
  let conversion = (f - 32) * 5 / 9;
  let fString = conversion.toFixed(1);
  if (fString.charAt(fString.length - 1) === '0') {
    return parseInt(fString);
  } else {
    return parseFloat(fString);
  }
}

var ctof = function(c) {
  let conversion = (c * 9 / 5) + 32;
  let cString = conversion.toFixed(1);
  if (cString.charAt(cString.length - 1) === '0') {
    return parseInt(cString);
  } else {
    return parseFloat(cString);
  }
}

module.exports = {
  ftoc,
  ctof
}
