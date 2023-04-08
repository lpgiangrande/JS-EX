const a = 5;

function outer () {
    const a = 10;

    function inner () {
        const a = 15;
        console.log(a);
    }

    inner();
    console.log(a);
}

outer();
console.log(a);

// 15
// 10
// 5

/**
 * outer in first, print the result of inner(15) then print the a declaration in the outer func (10).
 * then print the last console log (5, global)
 */

function outerFunction() {
    const name = "John";
  
    function innerFunction() {
      console.log("Hello " + name);
    }
  
    return innerFunction; 
  }
  
  const greeting = outerFunction();
  greeting(); // outputs "Hello John"



function counter() {
    let count = 0;

    function increment() {
        count++; // count = 1
        console.log(count);
    }
    
    return increment;
}

const counter1 = counter();
const counter2 = counter();

counter1(); // Outputs 1
counter1(); // Outputs 2
// first time, count = 1, so second time, count is calculated with initial value of 1, not 0
counter2(); // Outputs 1
counter2(); // Outputs 2