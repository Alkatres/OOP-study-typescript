import Ticket from "./Ticket";

export default class TicketOffice {
  private amount: number;
  private tickets: Array<Ticket>;

  constructor(amount: number, ...tickets) {
    this.amount = amount;
    this.tickets = [...tickets];
  }

  public getTicket(): Ticket {
    
  }

  public minusAmount(amount: number): void {
    this.amount -= amount;
  }

  public plusAmount(amount: number): void {
    this.amount += amount;
  }
}
