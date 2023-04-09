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

In this example, we define a person object with a sayHi() method. We then **create a new object, student, using Object.create() and set its prototype to be the person object** . We add a name property to the student object. When we call the sayHi() method on the student object, JavaScript first looks for it on the student object and doesn't find it, **so it looks up the prototype chain and finds it on the person object** .
