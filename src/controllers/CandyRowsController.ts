import { Candy } from '../game/Candy';
import { CandyRow } from '../game/CandyRow';
import { Round } from '../game/Round';

export class CandyRowsController {
  private currentRowIndex = -1;
  private _fortuneCandy: Candy | null = null;
  private _multipliers = [1.2, 2, 3.5, 6, 12, 25, 60, 150, 400, 1200];

  public revealRow(round: Round) {
    this.currentRowIndex++;
    // const candies = new CandyRow().revealCandies(this.currentRowIndex);
    const candies = [
      {
        name: this._fortuneCandy.name,
      },
      {
        name: this._fortuneCandy.name,
      },
      {
        name: this._fortuneCandy.name,
      },
    ];
    const isWin = this.checkWin(candies);
    if (isWin) {
      const win = round.bet * this._multipliers[this.currentRowIndex];
      round.win = win;
      return {
        win,
        candies,
        nextPrize: round.bet * this._multipliers[this.currentRowIndex + 1],
      };
    } else {
      this.reset();
      return {
        win: 0,
        candies,
      };
    }
  }

  revealInitialRow(round: Round) {
    this.currentRowIndex++;
    const candies = new CandyRow().revealCandies(this.currentRowIndex);
    const candyName = candies[0].name;
    if (candies.every(candy => candy.name === candyName)) {
      const win = round.bet * this._multipliers[this.currentRowIndex];
      round.win = win;
      this._fortuneCandy = new Candy(candyName);
      return {
        win,
        candies,
        fortuneCandy: this._fortuneCandy,
        nextPrize: round.bet * this._multipliers[this.currentRowIndex + 1],
      };
    } else {
      this.reset();
      return {
        win: 0,
        candies,
        nextPrize: 0,
      };
    }
  }

  private checkWin(candies: Candy[]) {
    if (!this._fortuneCandy) throw new Error('Sem doce da sorte definido');
    return candies.some(candy => candy.name === this._fortuneCandy.name);
  }

  public checkIsFinished() {
    if (this.currentRowIndex === this._multipliers.length - 1) return true;
    return false;
  }

  reset() {
    this.currentRowIndex = -1;
    this._fortuneCandy = null;
  }
}
