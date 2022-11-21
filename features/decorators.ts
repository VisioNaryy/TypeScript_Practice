@classDecorator
class Boat {
  //@testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('some error message')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

//NOTE: decorators only get executed one single time when we first define our class (decorators don't execute when we create an instance of a class)

//first attribute of decorator is prototype, second is key, third is property descriptor
//prototype stores only defenitions of an object without any predefined values

//TODO: change property functionality
// const hondaCar = { make: 'honda', year: 2000 };
// Object.getOwnPropertyDescriptor(car, 'make'); //get prop descriptor object
// Object.defineProperty(car, 'make', { writable: false });

//TODO: example of decorator
// function logError(target: any, key: string, desc: PropertyDescriptor): void {
//   const method = desc.value;

//   desc.value = function () {
//     try {
//       method();
//     } catch (error) {
//       console.log('some error');
//     }
//   };
// }

//TODO: decorator factory. It's a function which returns decorator function
// now we can pass some string into decorator @logError('some error message')
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}
