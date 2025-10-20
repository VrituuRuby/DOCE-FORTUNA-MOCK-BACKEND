export class BetController {
  private nextBets: number[];
  private currentBet: number;

  constructor() {
    this.nextBets = [];
    this.currentBet = 0;
  }

  public addNextBet() {
    if (this.nextBets.length === 0) {
      this.nextBets.push(this.currentBet * 2);
      return;
    }

    this.nextBets.push(this.currentBet + 100);
  }

  public getNextBet() {
    return this.nextBets[this.nextBets.length - 1];
  }

  public setCurrentBet(bet: number) {
    this.currentBet = bet;
    this.addNextBet();
  }

  public getCurrentBet() {
    return this.currentBet;
  }
}
