module.exports = function(num) {
  var typeNumber = typeof(num) === 'number';
  var isNumber   = !Number.isNaN(num)
  if (typeNumber && isNumber) {
    return num + "ms";
  }
  else {
    throw new Error("Not a number");
  }
}
