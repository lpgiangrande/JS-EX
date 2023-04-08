/**
 * With only 2 classes : Visitor & Ticket 
 */

const Visitor = require('./Visitor');
const Ticket = require('./Ticket');

// Example usage

const tickets = {};

function addTicketToList(ticket) {
  tickets[ticket.id] = ticket;
}

const ticket1 = Ticket.buyTicket('John Doe', 25, addTicketToList);
  /*Ticket {
  visitor: Visitor { name: 'John Doe', age: 25, termsAgreed: true },
  id: 'TICKET-1680797162847-929'
  }*/

  
//console.log(ticket1.visitor.name); // John
//console.log(ticket1.visitor.termsAgreed); // True
console.log(ticket1.revoke()) // "John Doe's ticket with ID TICKET-1680983554569-911 is now invalid."


const ticket2 = Ticket.buyTicket('Elise Fawn', 12, addTicketToList);
const ticket3 = Ticket.buyTicket('Gaby Lelapin', 16, addTicketToList);


console.log(tickets);
// {
//   'TICKET-1680985982068-69': Ticket {
//     visitor: Visitor { name: 'John Doe', age: 25, termsAgreed: true },
//     id: null,
//     price: 10
//   },
//   'TICKET-1680985982078-118': Ticket {
//     visitor: Visitor { name: 'Elise Fawn', age: 12, termsAgreed: true },
//     id: 'TICKET-1680985982078-118',
//     price: 5
//   },
//   'TICKET-1680985982078-570': Ticket {
//     visitor: Visitor { name: 'Gaby Lelapin', age: 16, termsAgreed: true },
//     id: 'TICKET-1680985982078-570',
//     price: 5
//   }
// }

const result = Ticket.checkStatus(tickets, ticket2.id); 
console.log(result); // sold to Elise Fawn