var oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true,
    summary: function () {
        return "Name: " + this.name;
    },
};
function printVehicle(vehicle) {
    console.log(vehicle.summary());
}
printVehicle(oldCivic);
