import Visitor from './Visitor';

class Ticket {
  constructor(id, type, price) {
    this.id = id;
    this.type = type;
    this.price = price;
    this.soldTo = null;
  }

  sellTo(visitor) {
    this.soldTo = visitor;
    console.log(`${this.type} ticket sold to ${visitor.name}.`);
  }

  setSoldTo(name) {
    this.soldTo = name;
  }

  revoke() {
    this.soldTo = null;
    console.log(`${this.id} has been revoked.`);
  }

  getStatus() {
    if (this.soldTo === null) {
      return 'not sold';
    } else {
      return `ACTIVE : sold to ${this.soldTo.name}`;
    }
  }
}

export default Ticket;