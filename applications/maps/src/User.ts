import faker from 'faker';
import { IMappable } from './CustomMap';

//NOTE: default keyword - we can export values directly using default keyword
//export default 'red';
//but it's a bad practise to use default keywords except third-party modules

export class User implements IMappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  /**
   *
   */
  constructor() {
    this.name = faker.name.firstName();
    //initialize location property, because it's an object
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
    <h1>User name: ${this.name}</h1>
    </div>
    `;
  }
}
