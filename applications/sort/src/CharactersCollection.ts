import { ISortable } from './ISortable';
import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter implements ISortable {
  /**
   *
   */
  constructor(public data: string) {
    super();
  }

  public get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    let characters = this.data.split('');

    let leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  }
}
