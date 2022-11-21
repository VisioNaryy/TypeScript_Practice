let add = (a: number, b: number): number => {
  return a + b;
};

function divide(x: number, y: number): number {
  return x / y;
}

let multiply = function (x: number, y: number): number {
  return x + y;
};

function logger(message: string): void {
  console.log(message);
}

// ":never" is used only when we'll never expect to return any except error
let throwError = (message: string): never => {
  throw new Error(message);
};

//NOTE: destructuring
class Forecast {
  constructor(weather: string, date: Date) {
    this.Weather = weather;
    this.Date = date;
  }

  private _weather: string = 'sunny';
  public get Weather(): string {
    return this._weather;
  }
  public set Weather(v: string) {
    this._weather = v;
  }

  private _date: Date;
  public get Date(): Date {
    return this._date;
  }
  public set Date(v: Date) {
    this._date = v;
  }
}

let logWeater = function (forecast: { Date: Date; Weather: string }): void {
  console.log(forecast.Date);
  console.log(forecast.Weather);
};

let forecast = new Forecast('rainy', new Date('22/05/2020'));

logWeater(forecast);
