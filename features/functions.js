var add = function (a, b) {
    return a + b;
};
function divide(x, y) {
    return x / y;
}
var multiply = function (x, y) {
    return x + y;
};
function logger(message) {
    console.log(message);
}
// ":never" is used only when we'll never expect to return any except error
var throwError = function (message) {
    throw new Error(message);
};
//NOTE:
var Forecast = /** @class */ (function () {
    function Forecast(weather, date) {
        this._weather = 'sunny';
        this.Weather = weather;
        this.Date = date;
    }
    Object.defineProperty(Forecast.prototype, "Weather", {
        get: function () {
            return this._weather;
        },
        set: function (v) {
            this._weather = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Forecast.prototype, "Date", {
        get: function () {
            return this._date;
        },
        set: function (v) {
            this._date = v;
        },
        enumerable: false,
        configurable: true
    });
    return Forecast;
}());
var logWeater = function (forecast) {
    console.log(forecast.Date);
    console.log(forecast.Weather);
};
var forecast = new Forecast('rainy', new Date('22/05/2020'));
logWeater(forecast);
