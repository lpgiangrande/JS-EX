## Composition

Composition is the practice of **creating complex objects by combining simpler objects together**. In JavaScript, composition can be achieved by creating objects that contain other objects as properties.

## Polymorphism

Polymorphism allows objects of different types to be used interchangeably. In JavaScript, this is achieved through the use of interfaces, which are essentially contracts that specify what methods an object should have.

```javascript
// Animal base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Dog subclass that extends Animal
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Cat subclass that extends Animal
class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

// Creating animal objects and calling their speak() methods
const animal = new Animal("Generic animal");
const dog = new Dog("Fido");
const cat = new Cat("Fluffy");

animal.speak(); // Output: Generic animal makes a sound.
dog.speak(); // Output: Fido barks.
cat.speak(); // Output: Fluffy meows.
```

## Mixins

Mixins are a way of adding functionality to an object by copying properties and methods from another object. In JavaScript, mixins can be implemented using object composition and the Object.assign() method.

```javascript
// A "can fly" mixin
const canFly = {
  fly() {
    console.log("Flying!");
  },
};

// A "can swim" mixin
const canSwim = {
  swim() {
    console.log("Swimming!");
  },
};

// A duck object that uses composition to include both the "can fly" and "can swim" behaviors
const duck = Object.assign({}, canFly, canSwim);

// Calling the fly() and swim() methods on the duck object
duck.fly(); // Output: Flying!
duck.swim(); // Output: Swimming!
```

In this case, the duck object has both the ability to fly and swim, even though those behaviors are defined in separate mixins.
