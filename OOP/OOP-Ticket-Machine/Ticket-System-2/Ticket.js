const Visitor = require('./Visitor');

class Ticket {
    constructor(visitor) {
      this.visitor = visitor;
      this.id = Ticket.generateTicketId();
      visitor.termsAgreed = true;
      this.price = visitor.age >= 18 ? 10 : 5;
    }
  
    /**
     * This function is called when an instance of Ticket is created
     * const ticket = Ticket.buyTicket('John Doe', 25);
     * @param {Object} Visitor 
     * @returns {String} a ticket ID
     */

    static generateTicketId() {
      const timestamp = new Date().getTime();
      const randomNum = Math.floor(Math.random() * 1000);
      const ticketId = `TICKET-${timestamp}-${randomNum}`;
      console.log('generated ticketId:', ticketId);
      //console.log(`ticket is ${ticketId} sold to ${visitor.name}`)
      return ticketId;
    }
  
    /**
     * buyTicket(name, age) creates a new Visitor instance with the given name and age 
     * and then creates a new Ticket instance with that visitor. 
     * Finally, thid function returns the new ticket instance.
     * 
     * * * * STATIC METHOD * * * *
     * 
     * Static method -> const ticket1 = Ticket.buyTicket('John Doe', 25);
     * Without : const visitor1 = new Visitor('John Doe', 25); const ticket1 = new Ticket(visitor1);
     * 
     * Here the method is called directly on the class without having to instantiate a Ticket object first using the NEW keyword.
     *
     * * * * * * * * * * * * * * *
     * 
     * @param {String} name 
     * @param {Number} age 
     * @param {callback} addTicketToList to add ticket to a list
     * @returns {Object} a ticket instance 
     */

    static buyTicket(name, age, addTicketToList) {
      const visitor = new Visitor(name, age);
      const ticket = new Ticket(visitor);
      // Call the callback function with the ticket object :
      addTicketToList(ticket); 
      return ticket;
    }

    revoke() {
        console.log(`${this.visitor.name}'s ticket with ID ${this.id} is now invalid.`);
        this.id = null;
    }

    /**
     * Checks the status of a ticket by ID.
     * @param {object} tickets - The tickets object.
     * @param {string} ticketId - The ID of the ticket to check
     * @returns {string} - response : "invalid" or "sold to ..."
     */

    static checkStatus(tickets, ticketId) { 
        if (tickets[ticketId]) {
            return `sold to ${tickets[ticketId].visitor.name}`;
        } else {
            return 'Invalid ticket';
        }
    }
  }


  module.exports = Ticket;