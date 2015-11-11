module.exports = function roundToPrecision(precision) {
  var log2 = Math.log2(precision);
  // Special case to avoid float errors like roundToPrecision(0.05)(1.65) → 1.6500000000000001
  if (log2 < 0 && Math.floor(log2) != Math.ceil(log2)) {
    var fixed = precision.toString().length - 2;
    return function (value) {
      value = precision * Math.round(value / precision);
      return parseFloat(value.toFixed(fixed));
    }
  }
  // General case
  return function (value) {
    return precision * Math.round(value / precision);
  }
};
