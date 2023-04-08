const Visitor = require('./Visitor');
const Ticket = require('./Ticket');
const TicketTracker = require('./TicketTracker')


// const visitor1 = new Visitor('Alice', 25);
// const ticketId = visitor1.createTicket();

// console.log(visitor1.ticketId);

const tracker = new TicketTracker();

// create a new visitor, Alice and buy a ticket
const visitor1 = new Visitor('Alice', 25);

/* RESULT : 
Ticket {
  type: 'TICKET-1680987845434-639',
  price: 'adult',
  soldTo: null
}
*/

// Assign ticket to Alice after paiment 
const ticket1 = visitor1.buyTicket(tracker);
//generateTicketId() = TICKET-1680987845434-639 ticket sold to Alice.
//buyTicket() =
{/* <ref *1> Ticket {
  type: 'TICKET-1680987845434-639',
  price: 'adult',
  soldTo: Visitor {
    name: 'Alice',
    age: 25,
    hasAgreedToTerms: true,
    ticket: [Circular *1] -> mean the 2 objects are connected to each other.
  }
} */}


ticket1.sellTo(visitor1); // "sold to Alice"



console.log(ticket1.getStatus()); // "ACTIVE : sold to Alice"
console.log(ticket1.revoke()); // "TICKET-1680988445165-375 has been revoked."

// 2nd ticket
const visitor2 = new Visitor('Jojo', 10);
const ticket2 = visitor2.buyTicket(tracker);


visitor2.ticket.setSoldTo("John"); // change name on the ticket
console.log(ticket2)

//console.log(tracker)