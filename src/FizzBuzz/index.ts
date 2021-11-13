export class FizzBuzz {
  main(): void {
    for (let i = 1; i <= 100; i++) {
      console.log(this.getElem(i));
    }
  }

  getElem(n: number): string {
    if (this.isFizzBuzz(n)) return 'FizzBuzz';

    if (this.isFizz(n)) return 'Fizz';

    if (this.isBuzz(n)) return 'Buzz';

    return n.toString();
  }

  private isFizz(n: number): boolean {
    return n % 3 === 0;
  }

  private isBuzz(n: number): boolean {
    return n % 5 === 0;
  }

  private isFizzBuzz(n: number): boolean {
    return this.isBuzz(n) && this.isFizz(n);
  }

  private isMultipleOf3(n: number): boolean {
    return n % 3 === 0;
  }
}
