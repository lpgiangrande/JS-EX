function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
greet("Alice", sayGoodbye);

// Hello, Alice! -> first print the console.log
// Goodbye!    -> then, call sayGoodbye function

/**
 * A callback function is a function that is passed as an argument to another function, 
 * and is executed when that function has completed.
 */

/**
 * Permet de déclarer 2 actions distinctes dans la même fonction, 
 * qui ne doivent pas s'opérer au même moment
 * 
 * 1 peu comme un timer sans temps fixe, juste attendre que la 1ère action soit exécutée avant de commencer la 2e
 */