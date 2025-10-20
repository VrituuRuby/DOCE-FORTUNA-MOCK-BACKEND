export const fakeTimer = (time = 1000) => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export const getRandomArbitrary = (min: number, max: number) => {
  return Number((Math.random() * (max - min) + min).toFixed(0));
};

const logColors = {
  Reset: '0',
  Bright: '1',
  Dim: '2',
  Underscore: '4',
  Blink: '5',
  Reverse: '7',
  Hidden: '8',

  FgBlack: '30',
  FgRed: '31',
  FgGreen: '32',
  FgYellow: '33',
  FgBlue: '34',
  FgMagenta: '35',
  FgCyan: '36',
  FgWhite: '37',
  FgGray: '90',

  BgBlack: '40',
  BgRed: '41',
  BgGreen: '42',
  BgYellow: '43',
  BgBlue: '44',
  BgMagenta: '45',
  BgCyan: '46',
  BgWhite: '47',
  BgGray: '100',
};

const getColor = (color: keyof typeof logColors) => {
  return `\x1b[${logColors[color]}m%s\x1b[0m`;
};

export const log = (message: any, color: keyof typeof logColors) => {
  console.log(getColor(color), message);
};
