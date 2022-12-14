import { ISortable } from './ISortable';

export abstract class Sorter {
  // tell typescript that length property, compare() and swap() methods will be declared in the child - classes
  abstract compare(leftIndex: number, rightIndex: number): boolean;

  abstract swap(leftIndex: number, rightIndex: number): void;

  abstract length: number;

  public sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
