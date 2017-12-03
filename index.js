const toFixedWithoutTrailingZeros = (v, p) => v.toFixed(p).replace(/\.?0+$/, '');

module.exports = (step, outputType = String) => {
  const round = (v) => step * Math.round(v / step);
  const getFractionalDigitsCount = () => {
    let stepAsString = step.toString();

    // Specific case for really small numbers
    if (stepAsString.match('e')) {
      stepAsString = toFixedWithoutTrailingZeros(step, 20);
    }

    return stepAsString.length - 2;
  };

  let format = Object;

  // Specific case to avoid float errors like
  // roundTo(0.05)(1.65) → "1.6500000000000001"
  //
  // Applies if step is < 1 and is not a power of 2
  // (which is where JS will lose precision).
  if (step < 1 && Math.log2(step) % 1 !== 0) {
    format = (n) => toFixedWithoutTrailingZeros(n, getFractionalDigitsCount());
  }

  // General case
  return (v) => outputType(format(round(v)));
};
