import { log } from "../utils.js";

import { Game } from "../game/Game.js";

import * as t from "./types.js";

export class Events {
  private static connect(game: Game, args: t.TConnectArgs): t.TEventResponse {
    try {
      const data = game.config(args);

      return {
        type: "CONFIG",
        data: {
          countryCode: "BR",
          currencyIsoCode: data.currencyIsoCode,
          player: data.player,
          jurisdictionCode: "BR",
          validBets: data.validBets,
        },
      };
    } catch (e) {
      log(e, "FgRed");
      return {
        type: "CONNECT_ERROR",
        data: { errorCode: t.EErrors.CONNECT_ERROR },
      };
    }
  }

  private static placeBet(
    game: Game,
    { bet }: { bet: number }
  ): t.TEventResponse {
    try {
      const { canBetAgain, data } = game.placeBet(bet);

      if (canBetAgain) return { type: "BET_WIN", data };

      return { type: "BET_LOSE", data };
    } catch (e) {
      log(e, "FgRed");
      return {
        type: "PLACE_BET_ERROR",
        data: { errorCode: t.EErrors.PLACE_BET_ERROR },
      };
    }
  }

  private static extraRow(game: Game): t.TEventResponse {
    try {
      const { canBetAgain, data } = game.newPlaceBet();

      if (canBetAgain) return { type: "EXTRA_ROW_ACCEPTED", data };

      return { type: "BET_LOSE", data };
    } catch (e) {
      log(e, "FgRed");
      return {
        type: "EXTRA_ROW_ERROR",
        data: { errorCode: t.EErrors.EXTRA_ROW_ERROR },
      };
    }
  }

  private static cashout(game: Game): t.TEventResponse {
    try {
      const { data } = game.cashout();

      return {
        type: "CASHOUT_ACCEPTED",
        data,
      };
    } catch (e) {
      return {
        type: "CASHOUT_ERROR",
        data: { errorCode: t.EErrors.CASHOUT_ERROR },
      };
    }
  }

  public static async callEvent(
    game: Game,
    type: string,
    data?: any
  ): Promise<t.TEventResponse> {
    if (type === "CONNECT") return this.connect(game, data);
    if (type === "PLACE_BET") return this.placeBet(game, data);
    if (type === "EXTRA_ROW") return this.extraRow(game);
    if (type === "CASHOUT") return this.cashout(game);

    console.error("Event not found");

    return null;
  }
}
