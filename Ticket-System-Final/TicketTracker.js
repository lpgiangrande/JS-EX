class TicketTracker {
  constructor() {
    this.tickets = [];
  }

  addTicket(ticket) {
    this.tickets.push(ticket);
  }
}
module.exports = TicketTracker;