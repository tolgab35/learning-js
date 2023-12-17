class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log(`You drive the ${this.model}`);
  }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "black");

const cars = [car1, car2, car3];

cars.forEach((car) => console.log(car.model));

cars.forEach((car) => car.drive());
/* get same output with for...of
startRace(cars);

function startRace(cars) {
  for (const car of cars) {
    car.drive();
  }
}
*/
