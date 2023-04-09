# Callbacks

Fonction passée en argument d'une autre fonction, est appelé quand la première action est terminée.
<br>
Cependant, ne pas utiliser quand il faut gérer des erreurs ou de mutliples actions asynchrones -> <br>
préférer les Promesses.

# Promises

Sont des objects qui représentent une éventuelle complétion / ou échec, d'une opération asynchrone. <br>
Plus structurées et flexibles. <br>
On peut chaîner les opérations plus simplement (code plus lisible et maintenable). <br>

- then : handle the success of an asynchronous operation
- catch : handle any errors that occur.
  <br>
- créer une promesse : new Promise() constructor -> pass in a function that takes two arguments : <br>
  "resolve" & "reject"

## Create a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, world!");
  }, 1000);
});
```

## Handle its result

```javascript
myPromise
  .then((message) => {
    console.log(message); // Output: 'Hello, world!'
  })
  .catch((error) => {
    console.error(error);
  });
```

## Example of chaining

```javascript
const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: "John" };
      resolve(user);
    }, 1000);
  });
};

const getUserPosts = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
        { id: 3, title: "Post 3" },
      ];
      resolve({ user, posts });
    }, 1000);
  });
};

getUser()
  .then((user) => getUserPosts(user))
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

In this example, we define two functions that return Promises: getUser, which simulates fetching a user from a server, and getUserPosts, which simulates fetching a user's posts from a server. We then chain these two Promises together using the then method to fetch the user and then fetch their posts. Finally, we log the result to the console.

# Async Await

Syntaxe à privilégier. <br>
Améliore la lisibilité du code asynchrone <br><br>
With async/await, you can write asynchronous code that looks and behaves more like synchronous code.
This makes it easier to reason about your code and avoid callback hell. <br>

```javascript
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
};

fetchData();
```

n this example, we define an async function fetchData that uses the await keyword to wait for the response from an API endpoint. We use the fetch method to make the API request, which returns a Promise that resolves with the response.<br>
e then use the await keyword again to wait for the data to be parsed as JSON using the json() method. Finally, we log the data to the console.<br>

Using async/await in this way allows us to write code that is more readable and easier to understand than using Promises directly.
