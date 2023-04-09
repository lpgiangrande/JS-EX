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
