import { CandyRow } from '../game/CandyRow.js';

export class HistoryItem {
  constructor(
    public readonly date: string,
    public readonly roundId: string,
    public readonly bet: number,
    public readonly totalWin: number,
    public readonly rows: CandyRow[],
  ) {}
}
