import { Candy } from './Candy';

export class Round {
  private _bet: number;
  private _fortuneCandy: Candy;
  private _curretnWin: number;

  constructor(public readonly bet: number) {}

  public get win() {
    return this._curretnWin;
  }

  public set win(value: number) {
    this._curretnWin = value;
  }
}
