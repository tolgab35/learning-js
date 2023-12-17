class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "black");

displayInfo(car1);
displayInfo(car2);
displayInfo(car3);

changeColor(car1, "white");

displayInfo(car1);

function displayInfo(car) {
  console.log(
    `Car model: ${car.model}\nYear: ${car.year}\nColor: ${car.color}`
  );
}
function changeColor(car, color) {
  car.color = color;
}
