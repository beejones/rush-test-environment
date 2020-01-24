import {FancyCalculator} from '../lib/index';

describe('FancyCalculator', () => {

  it('should add numbers', () => {
    expect(new FancyCalculator().add(5, 7)).toEqual(12);
  });

  it('should substract numbers', () => {
    expect(new FancyCalculator().sub(7, 5)).toEqual(2);
  });

  it('should multiply numbers', () => {
    expect(new FancyCalculator().mul(7, 5)).toEqual(35);
  });
});
