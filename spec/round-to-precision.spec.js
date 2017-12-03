import roundTo from '..';

describe('basic cases', () => {
  it('should round 1.1 to 1', () => {
    const roundToInteger = roundTo(1);
    expect(roundToInteger(1.1)).toBe('1');
  });
  
  it('should round 11 to 10', () => {
    const roundToTens = roundTo(10);
    expect(roundToTens(11)).toBe('10');
  });
  
  it('should round 1 to 1.1', () => {
    const roundToTens = roundTo(1.1);
    expect(roundToTens(1)).toBe('1.1');
  });
  
  it('negative case', () => {
    const roundToTens = roundTo(1.1);
    expect(roundToTens(-1)).toBe('-1.1');
  });
});

describe('step < 1', () => {
  it('should round 1.64 to 1.65', () => {
    const roundTo5Cents = roundTo(.05);
    expect(roundTo5Cents(1.64)).toBe('1.65');
  });
  
  it('negative case', () => {
    const roundTo5Cents = roundTo(.05);
    expect(roundTo5Cents(-1.64)).toBe('-1.65');
  });
  
  it('should round 10.2 to 10.25', () => {
    const roundToQuarters = roundTo(.25);
    expect(roundToQuarters(10.2)).toBe('10.25');
  });
  
  it('negative case', () => {
    const roundToQuarters = roundTo(.25);
    expect(roundToQuarters(-10.2)).toBe('-10.25');
  });
  
  it('should round 10 to 10', () => {
    const roundTo5Cents = roundTo(.05);
    expect(roundTo5Cents(10)).toBe('10');
  });
});

describe('"scientific powers" step', () => {
  it('should deal with big numbers', () => {
    const base = 1e12;
    const roundToBillions = roundTo(base);
    expect(roundToBillions(base + 1)).toBe('1000000000000');
  });
  
  it('should deal with really small numbers', () => {
    const base = 1e-15;
    const roundToFraction = roundTo(base);
    expect(roundToFraction(base)).toBe('0.000000000000001');
  });
  
  it('should deal with small numbers', () => {
    const base = 1e-7 + 1e-8;
    const roundToFraction = roundTo(base);
    expect(roundToFraction(base + 1e-9)).toBe('0.00000011');
  });
  
  it('negative case', () => {
    const base = 1e-7 + 1e-8;
    const roundToFraction = roundTo(base);
    expect(roundToFraction(-base - 1e-9)).toBe('-0.00000011');
  });
});

describe('use Number as return type', () => {
  it('should deal with small numbers', () => {
    const base = 1e-7 + 1e-8;
    const roundToFraction = roundTo(base, Number);
    expect(roundToFraction(base + 1e-9)).toBe(0.00000011);
  });
});

describe('good format', () => {
  it('trim away trailing zeros', () => {
    const roundToFraction = roundTo(1e-10);
    expect(roundToFraction(14.99999)).toBe('14.99999');
  });
});
