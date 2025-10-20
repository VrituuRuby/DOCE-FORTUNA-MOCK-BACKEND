export type TEventResponse = {
  type: string;
  data: any;
};

export type TConnectArgs = {
  game_config_id: string;
  player_id: string;
  currency: string;
  security_token: string;
  language: string;
};

export enum EErrors {
  CONNECT_ERROR,
  GET_PAYTABLE_ERROR,
  PLACE_BET_ERROR,
  EXTRA_ROW_ERROR,
  CASHOUT_ERROR,
  GET_HISTORY_ERROR,
}
