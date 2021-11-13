export class Person {
  name: string;
  constructor(personName: string) {
    this.name = personName;
  }
  walk(steps: number, direction: 'east' | 'west' | 'north' | 'south'): string {
    return `I walked ${steps} to the ${direction}`;
  }
}
