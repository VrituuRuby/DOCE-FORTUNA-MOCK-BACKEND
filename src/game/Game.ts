import { Player } from './Player.js';
import { Round } from './Round.js';

import { CandyRowsController } from '../controllers/CandyRowsController.js';

import { dataHistory } from '../data/index.js';

import { TConnectArgs } from '../events/types.js';

export class Game {
  private player: Player;
  private round: Round;
  private candyRowsController: CandyRowsController;

  constructor() {
    this.candyRowsController = new CandyRowsController();
  }

  public config(args: TConnectArgs) {
    this.player = new Player(args.player_id);

    this.candyRowsController.reset();

    return {
      currencyIsoCode: 'BRL',
      player: {
        id: this.player.id,
        balance: this.player.getBalance(),
      },
      validBets: [1, 10, 20, 25, 50, 100, 200, 500],
    };
  }

  public placeBet(bet: number) {
    this.round = new Round(bet);

    const currentRow = this.candyRowsController.revealInitialRow(this.round);
    const balance = this.player.updateBalance(bet);
    const canBetAgain = currentRow.win > 0;

    return {
      canBetAgain,
      data: {
        bet,
        balance,
        ...currentRow,
      },
    };
  }

  public newPlaceBet() {
    const currentRow = this.candyRowsController.revealRow(this.round);
    const canBetAgain = currentRow.win > 0;
    const isFinished = this.candyRowsController.checkIsFinished();
    const bet = this.round.bet;
    const balance = this.player.getBalance();

    if (!canBetAgain) this.candyRowsController.reset();

    return {
      canBetAgain,
      data: {
        bet,
        balance,
        isFinished,
        ...currentRow,
      },
    };
  }

  public cashout() {
    const win = this.round.win;
    this.candyRowsController.reset();

    return {
      data: {
        round: {
          win,
        },
        player: {
          id: this.player.id,
          balance: this.player.getBalance(),
        },
      },
    };
  }

  public history() {
    return dataHistory;
  }
}
