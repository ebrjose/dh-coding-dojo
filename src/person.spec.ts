import { Person } from './person';

describe('Class Person', () => {
  let person: Person;
  beforeEach(() => {
    person = new Person('Edwin');
  });

  describe('Class Person  walk method', () => {
    it('Person should walk to east five steps', () => {
      const message = person.walk(5, 'east');
      const expectedResult = 'I walked 5 to the east';
      expect(message).toBeDefined();
      expect(message).toBe(expectedResult);
    });
  });
});
