## Abstraction

Abstraction is the process of hiding implementation details while showing only the necessary information to the user. Here's an example in JavaScript:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }
}
```

In this example, we define a Person class with a constructor that takes a name and an age argument, and a sayHi method that logs a message to the console. Notice that we are hiding the implementation details of how the Person class works (i.e. the fact that it uses a constructor and a sayHi method) and showing only the necessary information to the user (i.e. how to create a new person and how to say hi).

We can then use the Person class to create new instances of people:

```javascript
const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

alice.sayHi(); // Hi, my name is Alice
bob.sayHi(); // Hi, my name is Bob
```

Notice that we don't need to know anything about how the Person class works internally to create a new person and say hi. We only need to know that we can create a new person by passing a name and an age to the constructor, and that we can say hi by calling the sayHi method.

This is an example of abstraction, because we are hiding the implementation details of the Person class and showing only the necessary information to the user.
