class someVehicle {
  private _color: string;
  public get color(): string {
    return this._color;
  }
  public set color(v: string) {
    this._color = v;
  }

  constructor(color: string) {
    this._color = color;
  }

  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

class Jeep extends someVehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log('jeep is running');
  }
}

let vehicle: someVehicle = new someVehicle('green');
console.log(vehicle.color);

vehicle.drive();
vehicle.honk();

let jeep = new Jeep(5, 'blue');
jeep.drive();
