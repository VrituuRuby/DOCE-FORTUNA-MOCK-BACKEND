export class Player {
  readonly id: string;
  private balance: number;
  private win: number;

  constructor(id: string) {
    this.id = id;
    this.balance = 100000000;
    this.win = 0;
  }

  private checkBalance(bet: number) {
    if (bet > this.balance) throw new Error("bet maior do que o balance");
  }

  public updateBalance(bet: number, type: "add" | "sub" = "sub") {
    if (type === "sub") {
      this.checkBalance(bet);
      this.balance = this.balance - bet;
    } else {
      this.balance = this.balance + bet;
    }
    return this.balance;
  }

  public getBalance() {
    return this.balance;
  }

  public sumWin(win: number) {
    this.win = this.win + win;
  }

  public getWin() {
    return this.win;
  }
}
