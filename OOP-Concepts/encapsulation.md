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
