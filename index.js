const toFixedWithoutTrailingZeros = (number, fractionDigits) =>
  number.toFixed(fractionDigits).replace(/\.?0+$/, "");

const checkInput = (number) => {
  if (!Number.isFinite(number)) {
    throw new Error("Input should be a finite number");
  }
  return number;
};

export const roundToUnit = (unitString, outputType = String) => {
  if (typeof unitString !== "string") {
    throw new Error("Unit should be a string");
  }
  const unit = Number(unitString);
  if (!Number.isFinite(unit) || unit < 0) {
    throw new Error("Unit should be coercible to a positive finite number");
  }
  if ((unit * 2) / 2 !== (unit / 2) * 2) {
    throw new Error("Unit should be consistent");
  }
  const roundToUnit = (number) => unit * Math.round(number / unit);

  const isFractionalUnit = unitString.includes(".");

  if (!isFractionalUnit) {
    return (number) => outputType(String(roundToUnit(checkInput(number))));
  }

  const targetFractionDigits = unitString.split(".")[1].length;

  const formatWithTrailingZeros = (input) => {
    const string = toFixedWithoutTrailingZeros(input, targetFractionDigits);
    const sum = string.length + targetFractionDigits;
    if (string.includes("e")) {
      throw new Error("Input is not to scale");
    }
    if (string.includes(".")) {
      const fractionDigits = string.split(".")[1].length;
      return string.padEnd(sum - fractionDigits, "0");
    }
    return (string + ".").padEnd(sum + 1, "0");
  };

  return (number) =>
    outputType(formatWithTrailingZeros(roundToUnit(checkInput(number))));
};
