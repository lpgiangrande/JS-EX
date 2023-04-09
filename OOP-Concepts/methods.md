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
