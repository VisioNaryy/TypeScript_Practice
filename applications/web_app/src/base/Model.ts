import { AxiosPromise, AxiosResponse } from 'axios';
import { IHasId } from './IHasId';

export interface IModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

export interface ISync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface IEvents {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model<T extends IHasId> {
  constructor(
    private attributes: IModelAttributes<T>,
    private events: IEvents,
    private sync: ISync<T>
  ) {}

  //refactor invoking methods in other classes (events, sync, attributes)
  // get on() {
  //   return this.events.on; //returns a reference to on-method in events-field
  // }

  // get trigger() {
  //   return this.events.trigger;
  // }

  // get get() {
  //   return this.attributes.get;
  // }

  //using properties insted of getters above (but this will work ONLY when we assign events and attributes in the class-constructor (), not inside {} )
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(updateProp: T): void {
    this.attributes.set(updateProp);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data); //by using this.set instead of this.attributes.save we will also trigger a change-event
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
