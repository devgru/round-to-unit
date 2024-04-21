import { roundToUnit } from "..";

describe("zeros handling", () => {
  it("(0.00001) trim away trailing zeros", () => {
    const roundToUnitFraction = roundToUnit("0.00001");
    expect(roundToUnitFraction(14.99999)).toBe("14.99999");
  });

  it("(0.010) should round 1 to 1.000", () => {
    const roundToUnitCents = roundToUnit("0.010");
    expect(roundToUnitCents(1)).toBe("1.000");
  });

  it("(1.010) should round 1 to 1.010", () => {
    const roundToUnitOneOhOne = roundToUnit("1.010");
    expect(roundToUnitOneOhOne(1)).toBe("1.010");
  });
});
