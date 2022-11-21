let profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

//by doing this, we expect that profile will be the type with age property of type string
let { age }: { age: number } = profile;

let {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
