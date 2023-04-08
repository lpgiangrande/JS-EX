//import Visitor from './Visitor.js';
const Visitor = require('./Visitor');

// console.log(visitor1.ticketId);
const visitor1 = new Visitor('John', 25);
visitor1.agreeToTerms();
visitor1.createTicket();
console.log("john's ticket id : ", visitor1.ticketId)
console.log(visitor1.getGTCVersion());

//visitor1.ticketStatus();

const trackingObj = {
    //'TICKET-1680710321042-819': 'John',
    'TICKET-1680710321042-820': 'Sarah',
    'TICKET-1680710321042-821': null,
  };

const ticketId = 'TICKET-1680710321042-819'; // John
const ticketStatus = Visitor.ticketStatus(trackingObj, ticketId);
console.log("ticket status : ", ticketStatus); // Sold to John

visitor1.revokeTicket(); //'TICKET-1680710321042-819': 'John',
console.log(visitor1.ticketId) // null
// ticket status :  unknown ticket id

