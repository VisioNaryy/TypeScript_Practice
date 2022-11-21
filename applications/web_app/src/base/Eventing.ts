import { IEvents } from './Model';

type CallBack = () => void;

export class Eventing implements IEvents {
  events: { [key: string]: CallBack[] } = {}; // events is an object with key-property of Callback[]

  on = (eventName: string, callback: CallBack): void => {
    let handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    let handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((callback) => {
      callback();
    });
  };
}
