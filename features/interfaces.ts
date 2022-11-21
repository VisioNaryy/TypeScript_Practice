interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

interface Repotrable {
  summary(): string;
}

let oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

function printVehicle(vehicle: Vehicle) {
  console.log(vehicle.summary());
}

printVehicle(oldCivic);
