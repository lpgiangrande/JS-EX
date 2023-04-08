//const Ticket = require('./Ticket');

class Visitor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.ticketId = null;
    this.gtcVersion = null;
    this.termsAgreed = false;
  }

  generateTicketId(visitor) {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 1000);
    const ticketId = `TICKET-${timestamp}-${randomNum}`;
    console.log(`generated ticketId: ${ticketId}, for ${visitor.name}`);
    return ticketId;
  }

  createTicket() {
    this.ticketId = this.generateTicketId(this);
    return this;
  }

  revokeTicket() {
    this.ticketId = null;
    return this;
  }
  /**
   * Revoke ticket and delete it from the tracking obj :
   */
  // revokeTicket(trackingObj) {
  //   if (this.ticketId) {
  //     delete trackingObj[this.ticketId];
  //     console.log(`Ticket with ID ${this.ticketId} has been revoked.`);
  //   }
  //   this.ticketId = null;
  //   return this;
  // }

  agreeToTerms(gtcVersion) {
    this.gtcVersion = "2.1";
    this.termsAgreed = true;
    console.log(`${this.name} has agreed to the terms and conditions.`);
  }

  getGTCVersion() {
    return this.gtcVersion ? this.gtcVersion : null;
  } //return this.gtcVersion;


  static ticketStatus(trackingObj, ticketId) {
    switch (true) {
      case !(ticketId in trackingObj):
        return 'unknown ticket id';
      case trackingObj[ticketId] === null:
        return 'not sold';
      default:
        return `sold to ${trackingObj[ticketId]}`;
    }
  }

  static simpleTicketStatus(trackingObj, ticketId) {
    if (!(ticketId in trackingObj) || trackingObj[ticketId] === null) {
      return 'invalid ticket !!!';
    } else {
      return trackingObj[ticketId];
    }
  }

}

module.exports = Visitor;

