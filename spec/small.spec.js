import { roundToUnit } from "..";

describe("unit < 1", () => {
  it("(0.05) should round 1.59 to 1.60", () => {
    const roundToUnit5Cents = roundToUnit("0.05");
    expect(roundToUnit5Cents(1.59)).toBe("1.60");
  });

  it("(0.05) should round -1.59 to -1.60", () => {
    const roundToUnit5Cents = roundToUnit("0.05");
    expect(roundToUnit5Cents(-1.59)).toBe("-1.60");
  });

  it("(0.25) should round 10.2 to 10.25", () => {
    const roundToUnitQuarters = roundToUnit("0.25");
    expect(roundToUnitQuarters(10.2)).toBe("10.25");
  });

  it("(0.25) should round -10.2 to -10.25", () => {
    const roundToUnitQuarters = roundToUnit("0.25");
    expect(roundToUnitQuarters(-10.2)).toBe("-10.25");
  });

  it("(0.05) should round 10 to 10.00", () => {
    const roundToUnit5Cents = roundToUnit("0.05");
    expect(roundToUnit5Cents(10)).toBe("10.00");
  });

  it("(0.05) should throw when input is not to scale", () => {
    const roundToUnit5Cents = roundToUnit("0.05");
    expect(() => roundToUnit5Cents(1e100)).toThrow("Input is not to scale");
  });
});
