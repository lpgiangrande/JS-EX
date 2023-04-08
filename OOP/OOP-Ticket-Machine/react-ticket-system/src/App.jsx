import React, { useState } from 'react';
import Visitor from './Visitor';
import Ticket from './Ticket';
import TicketTracker from './TicketTracker';

function App() {
  const [visitorName, setVisitorName] = useState('');
  const [visitorAge, setVisitorAge] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [ticketStatus, setTicketStatus] = useState('');
  const [ticketId, setTicketId] = useState('');
  const [ticketTracker] = useState(new TicketTracker());

  const handleNameChange = (event) => {
    setVisitorName(event.target.value);
  }

  const handleAgeChange = (event) => {
    setVisitorAge(event.target.value);
  }

  const handleBuyTicket = () => {
    const visitor = new Visitor(visitorName, visitorAge);
    const ticket = visitor.buyTicket(ticketTracker);
    console.log('ticket type:', typeof ticket); // String
    console.log('ticket has getStatus:', ticket.hasOwnProperty('getStatus')); // false

    setTicketType(ticket.type);
    setTicketPrice(ticket.price);
    setTicketStatus(ticket.getStatus());
    setTicketId(ticket.id);

  }

  return (
    <div>
      <label>
        Name:
        <input type="text" value={visitorName} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={visitorAge} onChange={handleAgeChange} />
      </label>
      <br />
      <button onClick={handleBuyTicket}>Buy Ticket</button>
      <br />
      {ticketType && (
        <div>
          Ticket Type: {ticketType}
          <br />
          Ticket Price: {ticketPrice}
          <br />
          Ticket Status: {ticketStatus}
          <br />
          Ticket ID: {ticketId}
        </div>
      )}
    </div>
  );
}

export default App;