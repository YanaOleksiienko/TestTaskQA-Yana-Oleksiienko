describe(`Function 'getNumberOfValues'`, () => {
  let getNumberOfValues;

  before(() => {
    getNumberOfValues = require('./getNumberOfValues').getNumberOfValues;
  });

  it(`should be declared`, () => {
    expect(getNumberOfValues)
      .toBeInstanceOf(Function);
  });
  it(`should return a number`, () => {
    expect(typeof getNumberOfValues())
      .toBe(Number);
  });
  it(`should return '0' when input is [0]`, () => {
    expect(getNumberOfValues([0]))
      .toEqual(0);
  });
  it(`should return '1' when input is [4, 0]`, () => {
    expect(getNumberOfValues([4, 0]))
      .toEqual(1);
  });
  it(`should return '3' when input is [4, 6, 12]`, () => {
    expect(getNumberOfValues([4, 6, 12]))
      .toEqual(3);
  });
  it(`should return '3' when input is [-4, -6, -12]`, () => {
    expect(getNumberOfValues([-4, -6, -12]))
      .toEqual(3);
  });
});
