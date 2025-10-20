import { HistoryItem } from '../controllers/HistoryItem.js';
import { Candy } from '../game/Candy.js';
import { CandyRow } from '../game/CandyRow.js';
import { ECandyName } from '../game/types.js';

const { E00, E01, E02, E03, E04, E05, E06 } = ECandyName;

export const dataHistory: HistoryItem[] = [
  new HistoryItem('2024-07-12 20:42:33.372589', '123', 10, 0, [
    new CandyRow(0, 10, 1, [new Candy(E01), new Candy(E01), new Candy(E01)]),
    new CandyRow(1, 20, 3, [new Candy(E02), new Candy(E03), new Candy(E04)]),
    new CandyRow(2, 30, 0, [new Candy(E00), new Candy(E00), new Candy(E00)]),
    new CandyRow(3, 40, 0, [new Candy(E00), new Candy(E00), new Candy(E00)]),
    new CandyRow(4, 50, 0, [new Candy(E00), new Candy(E00), new Candy(E00)]),
    new CandyRow(5, 60, 0, [new Candy(E00), new Candy(E00), new Candy(E00)]),
    new CandyRow(6, 70, 0, [new Candy(E00), new Candy(E00), new Candy(E00)]),
  ]),

  new HistoryItem('2024-07-12 22:42:33.372589', '345', 20, 80, [
    new CandyRow(0, 20, 1, [new Candy(E01), new Candy(E01), new Candy(E01)]),
    new CandyRow(1, 40, 1, [new Candy(E01), new Candy(E03), new Candy(E04)]),
    new CandyRow(2, 60, 1, [new Candy(E01), new Candy(E04), new Candy(E05)]),
    new CandyRow(3, 80, 2, [new Candy(E02), new Candy(E01), new Candy(E06)]),
    new CandyRow(4, 100, 0, [new Candy(E00), new Candy(E00), new Candy(E00)]),
    new CandyRow(5, 120, 0, [new Candy(E00), new Candy(E00), new Candy(E00)]),
    new CandyRow(6, 140, 0, [new Candy(E00), new Candy(E00), new Candy(E00)]),
  ]),
];
