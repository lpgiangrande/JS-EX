import Ticket from './Ticket';
import TicketTracker from './TicketTracker';

class Visitor {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.hasAgreedToTerms = false;
    }
  
    /**
     * Generate a ID for every created ticket | CB to buyTicket()
     * @param {Object} visitor 
     * @returns {String} a ticket id
     */
    generateTicketId(visitor) {
      const timestamp = new Date().getTime();
      const randomNum = Math.floor(Math.random() * 1000);
      const ticketId = `TICKET-${timestamp}-${randomNum}`;
      console.log(`generated ticketId: ${ticketId}, for ${this.name}`);
      return ticketId;
    }
  
    /**
     * By bying a ticket, means a Visitor has agreed to terms
     * Call the generateTicketId() function
     * @returns {Object} the ticket object
     */
    buyTicket(tracker) {
      this.hasAgreedToTerms = true;
      const ticketType = this.age >= 18 ? 'adult' : 'child';
      const ticketPrice = this.age >= 18 ? 10 : 5;
      const ticketId = this.generateTicketId(); // generate the ticket ID
      const ticket = new Ticket(this.generateTicketId(), ticketType, ticketPrice);
      this.ticket = ticket;
      tracker.addTicket(ticket);
      return ticketId; // return the generated ticket ID
    }
  }

  
  export default Visitor;