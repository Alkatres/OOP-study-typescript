// NOTE: JS, TS 의 Class 는 Constructor overload 를 지원하지 않으므로 생성자인자를 객체형태로 제공하기로함.

import Invitation from "./Invitation";
import Ticket from "./Ticket";

type BagConstructor = {
  amount: number;
  invitation?: Invitation | undefined | null;
};

export default class Bag {
  private amount: number;
  private readonly invitation: Invitation;
  private ticket: Ticket;

  constructor({ amount, invitation }: BagConstructor) {
    this.amount = amount
    this.invitation = invitation || null;
  }

  public hasInvitation(): boolean {
    return (this.invitation !== null);
  }

  public hasTicket(): boolean {
    return (this.ticket !== null);
  }

  public setTicket(ticket: Ticket): void {
    this.ticket = ticket;
  }

  public minusAmount(amount: number): void {
    this.amount -= amount;
  }

  public plusAmount(amount: number): void {
    this.amount += amount;
  }
}
