# OOP

Object-oriented programming (OOP) is a programming **paradigm** that focuses on **creating objects that encapsulate data and behavior**. In OOP, **objects are instances of classes**, which define the **properties and methods** of the object. Objects can communicate with each other through methods, and **inheritance** allows classes to be derived from other classes.

```javascript
// Define a parent class
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

// Define a child class that inherits from the parent class
class Dog extends Animal {
  constructor(name) {
    super(name, "dog");
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
}

// Create an instance of the child class
const myDog = new Dog("Fido");

// Call methods from both the parent and child classes
myDog.eat(); // Output: "Fido is eating."
myDog.sleep(); // Output: "Fido is sleeping."
myDog.bark(); // Output: "Fido is barking."
```

# FP

Functional programming (FP) is a programming paradigm that focuses on writing functions that transform data, rather than on objects and their methods. In FP, functions are treated as first-class citizens, which means that they can be passed around as arguments to other functions, and returned as values from functions. FP emphasizes immutability, and pure functions that do not have side effects.
<br>
FP often uses higher-order functions and closures.

```python
def add(x, y):
    return x + y

def double(x):
    return x * 2

result = double(add(2, 3))
print(result) # Output: 10
```

## main diff between OOP & FP

...is the way that they approach problem-solving. In OOP, the focus is on objects and their behavior, while in FP, the focus is on functions and their composition. <br>
OOP is often used for building complex systems with lots of interrelated objects, while FP is often used for solving problems that can be expressed as data transformations.

# More on JS OOP :

## Instance methods

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const john = new Person("John", 30);
john.sayHi(); // Output: "Hi, my name is John and I'm 30 years old."
```

These are methods that are defined on the **prototype** of a class and are **available on instances of that class**. They can access instance variables and methods of the class through the **this keyword**.

## Static methods

These are methods that are defined **on the class itself and are not available on instances of that class**. They are useful for creating utility functions or other methods that do not depend on instance variables.
<br>
In this example, multiply() is a static method that is defined on the MathHelper class. It is called directly on the class itself, without needing to create an instance of the class.

```javascript
class MathHelper {
  static multiply(a, b) {
    return a * b;
  }
}

const result = MathHelper.multiply(3, 5);
console.log(result); // Output: 15
```

## Getters & Setters

These are methods that are used to **get or set the value of a class's properties**. They are defined using the get and set keywords respectively.

```javascript
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.log("Width must be a positive number.");
    }
  }

  get area() {
    return this._width * this._height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.width); // Output: 5
console.log(rect.area); // Output: 50

rect.width = -2; // Output: "Width must be a positive number."
console.log(rect.width); // Output: 5
```

## the concept of prototypal inheritance.

JavaScript is a prototype-based language, which means that **objects can inherit properties and methods directly from other objects**.
<br>
In JavaScript, every object has an internal [[Prototype]] property that points to another object, called its prototype. This prototype object, in turn, can have its own prototype, forming a prototype chain.
<br>
When a property or method is accessed on an object, JavaScript looks for it on the object itself. If it's not found, it looks on the object's prototype, and then on that object's prototype, and so on, until it reaches the end of the prototype chain.
<br>
This is different from classical inheritance, which is used in languages like Java and Python, where classes are used to define objects and inheritance is achieved through class hierarchies.

Here's an example of prototypal inheritance in JavaScript:

```javascript
// Define a parent object with a method
const person = {
  sayHi() {
    console.log("Hi!");
  },
};

// Define a child object that inherits from the parent object
const student = Object.create(person);

// Add a property to the child object
student.name = "John";

// Call the inherited method on the child object
student.sayHi(); // Output: "Hi!"
```

In this example, we define a person object with a sayHi() method. We then ** create a new object, student, using Object.create() and set its prototype to be the person object** . We add a name property to the student object. When we call the sayHi() method on the student object, JavaScript first looks for it on the student object and doesn't find it, ** so it looks up the prototype chain and finds it on the person object** .

## how to access properties in an object using JavaScript

```javascript
// Define an object
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
};

// Access properties using dot notation
console.log(person.name); // Output: "John"
console.log(person.age); // Output: 30

// Access properties using bracket notation
console.log(person["name"]); // Output: "John"
console.log(person["age"]); // Output: 30

// Access nested properties using dot notation
console.log(person.address.street); // Output: "123 Main St"
console.log(person.address.city); // Output: "Anytown"
console.log(person.address.state); // Output: "CA"

// Access nested properties using bracket notation
console.log(person["address"]["street"]); // Output: "123 Main St"
console.log(person["address"]["city"]); // Output: "Anytown"
console.log(person["address"]["state"]); // Output: "CA"
```

It's worth noting that **dot notation is generally preferred for accessing properties that are known at development time**, while bracket notation is better for accessing properties whose names are not known until runtime, such as when using a variable to access a property.

## Encapsulation

Encapsulation refers to the practice of keeping an **object's internal state hidden** from the outside world, and providing a **public interface for interacting with the object**. In JavaScript, encapsulation can be achieved using **closures**, where you define private variables and functions within the constructor function of an object.

```javascript
function Person(name) {
  let age = 0; // Private variable

  function increaseAge() {
    // Private function
    age++;
  }

  this.sayHi = function () {
    increaseAge();
    console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
  };
}

const john = new Person("John");
john.sayHi(); // Output: "Hi, my name is John and I'm 1 years old."

// The following line will output "undefined" because "age" is a private variable
console.log(john.age);
```

## Composition

Composition is the practice of creating complex objects by combining simpler objects together. In JavaScript, composition can be achieved by creating objects that contain other objects as properties.

## Polymorphism

Polymorphism allows objects of different types to be used interchangeably. In JavaScript, this is achieved through the use of interfaces, which are essentially contracts that specify what methods an object should have.

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
