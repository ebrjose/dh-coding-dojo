import { FizzBuzz } from './index';

describe('Class FizzBuzz', () => {
  let fizzBuzz: FizzBuzz;
  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  describe('Class FizzBuzz  main method', () => {
    it('return Fizz if n is multiple of 3', () => {
      const message = fizzBuzz.getElem(3);
      const expectedResult = 'Fizz';
      expect(message).toBeDefined();
      expect(message).toBe(expectedResult);
    });

    it('return Buzz if n is multiple 5', () => {
      const message = fizzBuzz.getElem(5);
      const expectedResult = 'Buzz';
      expect(message).toBeDefined();
      expect(message).toBe(expectedResult);
    });

    it('return 1', () => {
      const message = fizzBuzz.getElem(1);
      const expectedResult = '1';
      expect(message).toBeDefined();
      expect(message).toBe(expectedResult);
    });

    it('return number', () => {
      const message = fizzBuzz.getElem(2);
      const expectedResult = '2';
      expect(message).toBeDefined();
      expect(message).toBe(expectedResult);
    });
  });
});
