## interfaces -> documentation / indicates how to create the class according to predefined rules

**An interface specifies what methods and properties a class must have in order to be considered a member of that interface.** It's like a contract between the interface and the implementing class, specifying what the class must provide. The implementing class must provide the necessary methods and properties according to the rules defined in the interface documentation.

In JavaScript, interfaces are not a built-in feature of the language, but you can simulate them using documentation and naming conventions. Here's an example:

```javascript
/**
 * @interface Animal
 * @property {string} name
 * @property {number} age
 * @method speak
 */

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log("Woof!");
  }
}
```

In this example, we define an "interface" called Animal using JSDoc documentation. The Animal interface has two properties (name and age) and one method (speak). We then define a Dog class that implements the Animal interface by providing implementations for the name, age, and speak properties and methods.

We can then use the Dog class as an Animal, because it implements the necessary properties and methods:

```javascript
function sayHello(animal) {
  console.log(
    `Hello, my name is ${animal.name} and I am ${animal.age} years old`
  );
  animal.speak();
}

const dog = new Dog("Buddy", 5);
sayHello(dog); // Hello, my name is Buddy and I am 5 years old
// Woof!
```

Notice that we can pass a Dog instance to the sayHello function, even though the function expects an Animal. This is because **the Dog class implements the Animal interface by providing implementations for the name, age, and speak properties and methods.**
