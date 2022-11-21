var profile = {
    name: 'Alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15,
    },
    setAge: function (age) {
        this.age = age;
    },
};
//by doing this, we expect that profile will be the type with age property of type string
var age = profile.age;
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
