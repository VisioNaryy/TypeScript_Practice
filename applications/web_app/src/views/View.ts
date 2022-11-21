import { Model } from '../base/Model';

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element | null, public model: T) {
    this.bindModel();
  }

  //it's like an override method in c#
  eventsMap(): { [key: string]: () => void } {
    return {};
  }
  regionsMap(): { [key: string]: string } {
    return {};
  }

  abstract template(): string;

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      //get array of elements that match that selector
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) this.regions[key] = element;
    }
  }

  onRender(): void {}

  render(): void {
    if (this.parent) this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    if (this.parent) this.parent.append(templateElement.content);
  }
}
