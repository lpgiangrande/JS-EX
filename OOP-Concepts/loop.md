## loop throught objects

1. for...in loop:

```javascript
const myObject = { a: 1, b: 2, c: 3 };

for (const key in myObject) {
  console.log(key); // Output: a, b, c
  console.log(myObject[key]); // Output: 1, 2, 3
}
```

In this example, we use a for...in loop to iterate over the properties of the myObject object. The loop iterates over **each key (property name)** in the object and outputs it to the console. We can then use the key to access the corresponding value using **bracket notation (myObject[key])** and output it to the console as well.

2. Object.keys() :

```javascript
const myObject = { a: 1, b: 2, c: 3 };

Object.keys(myObject).forEach((key) => {
  console.log(key); // Output: a, b, c
  console.log(myObject[key]); // Output: 1, 2, 3
});
```

In this example, we use the **Object.keys()** method to **get an array of all the keys (property names)** of the myObject object, and then use the **Array.forEach() method to loop over the array and output each key to the console**. We can then use each key to access the corresponding value using **bracket notation (myObject[key])** and output it to the console as well.

3. Object.entries() :

```javascript
const myObject = { a: 1, b: 2, c: 3 };

Object.entries(myObject).forEach(([key, value]) => {
  console.log(key); // Output: a, b, c
  console.log(value); // Output: 1, 2, 3
});
```

In this example, we use the **Object.entries()** method to **get an array of all the key-value pairs in the myObject object**, and then use the **Array.forEach()** method to loop over the array and output each key and value to the console using destructuring.

Note that when looping through objects, the order of the properties is not guaranteed, and can vary between different JavaScript engines and implementations.
