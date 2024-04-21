import { roundToUnit } from "..";

describe("check input type", () => {
  it("should throw an error if unit is not a string", () => {
    expect(() => roundToUnit(1)).toThrow("Unit should be a string");
  });
  it("should throw an error if unit is negative", () => {
    expect(() => roundToUnit("-1")).toThrow(
      "Unit should be coercible to a positive finite number",
    );
  });
  it("should throw an error if unit is not coercible to a finite number", () => {
    expect(() => roundToUnit("{}")).toThrow(
      "Unit should be coercible to a positive finite number",
    );
    expect(() => roundToUnit("Infinity")).toThrow(
      "Unit should be coercible to a positive finite number",
    );
  });

  it("should throw an error if unit is not consistent", () => {
    expect(() => roundToUnit("1e308")).toThrow("Unit should be consistent");
    expect(() => roundToUnit("1e-309")).toThrow("Unit should be consistent");
  });

  it("should throw an error if input is not a number", () => {
    const round = roundToUnit("1");
    expect(() => round("a")).toThrow("Input should be a finite number");
  });
});
