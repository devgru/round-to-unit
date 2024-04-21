import { roundToUnit } from "..";

describe("non-binary friendly numbers", () => {
  it("(0.3) should round 99.2 to 99.3", () => {
    const roundToUnitFraction = roundToUnit("0.3");
    expect(roundToUnitFraction(99.2)).toBe("99.3");
  });
  it("(0.3) should round -99.2 to -99.3", () => {
    const roundToUnitFraction = roundToUnit("0.3");
    expect(roundToUnitFraction(-99.3)).toBe("-99.3");
  });
});
