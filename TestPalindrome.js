describe(`Function 'isApolindrom'`, () => {
  let isApolindrom;

  before(() => {
    isApolindrom = require('./isApolindrom').isApolindrom;
  });

  it(`should be declared`, () => {
    expect(isApolindrom)
      .toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isApolindrom())
      .toBe(Boolean);
  });

  it(`should return 'true' when string = 'alla'`, () => {
    expect(isApolindrom('alla'))
      .toBe(true);
  });

  it(`should return 'true' when string = 'a lla'`, () => {
    expect(isApolindrom('a lla'))
      .toBe(true);
  });
  it(`should return 'false' when string = 'aloha'`, () => {
    expect(isApolindrom('aloha'))
      .toBe(false);
  });
  it(`should return 'false' when string = ' '`, () => {
    expect(isApolindrom(' '))
      .toBe(false);
  });
});