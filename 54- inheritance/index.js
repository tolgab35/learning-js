// inheritance = a child class inherit all the
//               methods and properties from another class

class Animal {
  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  alive = true;
  name = "Rabbit";

  run() {
    console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal {
  alive = true;
  name = "Fish";

  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}
class Hawk extends Animal {
  alive = true;
  name = "Hawk";

  fly() {
    console.log(`This ${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

fish.swim();
hawk.fly();

console.log(rabbit.alive);
rabbit.run();
rabbit.eat();
rabbit.sleep();

fish.swim();
fish.eat();
fish.sleep();

hawk.fly();
hawk.eat();
hawk.sleep();
