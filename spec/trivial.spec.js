import { roundToUnit } from "..";

describe("trivial cases", () => {
  it("(1) should round 1.1 to 1", () => {
    const roundToUnitInteger = roundToUnit("1");
    expect(roundToUnitInteger(1.1)).toBe("1");
  });

  it("(10) should round 11 to 10", () => {
    const roundToUnitTens = roundToUnit("10");
    expect(roundToUnitTens(11)).toBe("10");
  });

  it("(1.1) should round 1 to 1.1", () => {
    const roundToUnitTens = roundToUnit("1.1");
    expect(roundToUnitTens(1)).toBe("1.1");
  });

  it("(1.1) should round -1 to -1.1", () => {
    const roundToUnitTens = roundToUnit("1.1");
    expect(roundToUnitTens(-1)).toBe("-1.1");
  });
});
