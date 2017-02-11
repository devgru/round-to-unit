const trimTrailingZeros = v => v.replace(/\.?0+$/, '');

module.exports = function roundToStep(step, outputType = String) {
  const basicRound = v => step * Math.round(v / step);
  
  const log2 = Math.log2(step);
  
  // Special case to avoid float errors like
  // roundToStep(0.05)(1.65) → 1.6500000000000001
  //
  // Applies only if
  // step is < 1, i.e. log2(step) is negative
  let stepIsLessThan1 = log2 < 0;
  // and log2(step) is integer
  let stepIsPowerOf2 = Math.round(log2) !== log2;
  if (stepIsLessThan1 && stepIsPowerOf2) {
    let stepString = step.toString();
    
    // Even more special case, for really small numbers
    if (stepString.match('e')) {
      stepString = trimTrailingZeros(step.toFixed(20));
    }
    
    const digitsCount = stepString.length - 2;
    return v => outputType(trimTrailingZeros(basicRound(v).toFixed(digitsCount)));
  }
  // General case
  return v => outputType(basicRound(v));
};
