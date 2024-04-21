import { roundToUnit } from "..";

describe("unit represented with exponential", () => {
  it("(1000000000000) should deal with big numbers", () => {
    const roundToUnitBillions = roundToUnit("1000000000000");
    expect(roundToUnitBillions(1000000000001)).toBe("1000000000000");
  });

  it("(0.000000000000001) should deal with tiny numbers", () => {
    const roundToUnitFraction = roundToUnit("0.000000000000001");
    expect(roundToUnitFraction(1e-15)).toBe("0.000000000000001");
  });

  it("(0.00000011) should deal with tiny numbers", () => {
    const roundToUnitFraction = roundToUnit("0.00000011");
    const v = 1e-7 + 1e-8 + 1e-9;
    expect(roundToUnitFraction(v)).toBe("0.00000011");
    expect(roundToUnitFraction(v * 10)).toBe("0.00000110");
  });

  it("(0.00000011) should deal with tiny negative numbers", () => {
    const roundToUnitFraction = roundToUnit("0.00000011");
    expect(roundToUnitFraction(-1e-7 - 1e-8 - 1e-9)).toBe("-0.00000011");
  });
});
