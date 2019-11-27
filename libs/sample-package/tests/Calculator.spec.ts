import {Calculator} from '../lib/index'

describe('Calculator', () => {

  it('should add numbers', () => {
    expect(Calculator.add(5, 7)).toEqual(12);
  });
});
