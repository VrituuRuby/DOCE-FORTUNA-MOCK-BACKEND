import { getRandomArbitrary } from '../utils';

import { Candy } from './Candy';

import { ECandyName } from './types';

export class CandyRow {
  private candies: Candy[] = [];

  private sortName() {
    const random = Number(getRandomArbitrary(1, 5));
    return ECandyName[`E0${random}` as ECandyName];
  }

  public revealCandies(index: number) {
    const v = getRandomArbitrary(0, 1);

    if (index === 0 && v === 1) {
      const fortuneCandy = this.sortName();
      this.candies = [
        { name: fortuneCandy },
        { name: fortuneCandy },
        { name: fortuneCandy },
      ];
    } else {
      this.candies = [
        { name: this.sortName() },
        { name: this.sortName() },
        { name: this.sortName() },
      ];
    }

    return this.candies;
  }
}
