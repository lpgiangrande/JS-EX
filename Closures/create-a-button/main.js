// code & text from chatGPT


/*
you are building a JavaScript application that involves 
creating an HTML element and attaching an event listener to it.

You want the event listener to call a function that has access 
to a variable defined outside of the event listener.

In this situation, you could use a closure to create a function that has access to the variable, 
even after the event listener has been detached from the element.

*/


function createButton() {
    const button = document.createElement('button');
    const buttonText = 'Click me!';
    button.textContent = buttonText;
  
    function handleClick() { // handleClick() is a closure
      console.log(`You clicked the button with text: ${buttonText}`);
    }
  
    button.addEventListener('click', handleClick);
  
    return button;
  }
  
  const myButton = createButton();
  document.body.appendChild(myButton);

/*
In this example, createButton() is a function that creates a button element 
and attaches a click event listener to it. 

The event listener calls handleClick(), which logs a message 
to the console that includes the buttonText variable.

handleClick() is a closure because it has access to the buttonText variable, 
which is defined in the outer scope of createButton().

Even after the event listener has been detached from the button, 
handleClick() will still have access to the buttonText variable. 

This is because the closure "closes over" the variable, 
CREATING A PERSISTENT REFERENCE TO IT THAT CAN BE ACCESSED LATER.

*/

  