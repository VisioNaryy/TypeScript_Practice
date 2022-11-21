import { IModelAttributes } from '../../base/Model';

export class UserAttributes<T> implements IModelAttributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    //NOTE: by using this inside of arrow-function, this will always be referenced to the data-property inside the current class
    return this.data[key];
  };

  set(updateObject: T): void {
    Object.assign(this.data, updateObject); // NOTE: copy-paste all data from right object to left
  }

  //get all attributes/data
  getAll(): T {
    return this.data;
  }
}
