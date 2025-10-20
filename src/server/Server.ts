import { WebSocketServer } from 'ws';

import { Game } from '../game/Game.js';
import { Events } from '../events/Events.js';

import { log } from '../utils.js';

const port = Number(process.env.WEB_SOCKET_URL.split(':')[2]);
const server = new WebSocketServer({ port });

export class Server {
  public static startWebSocketServer() {
    server.on('connection', async socket => {
      log('\nClient connected\n', 'FgBlue');

      const game = new Game();

      socket.on('message', async jsonMessage => {
        log(`\nReceived: ${jsonMessage}\n`, 'FgCyan');

        const response = JSON.parse(`${jsonMessage}`);
        const sendData = await Events.callEvent(game, response.type, response.data);

        if (!sendData) return;

        log(`\nSent: ${JSON.stringify(sendData)}\n`, 'FgMagenta');

        socket.send(JSON.stringify(sendData));
      });

      socket.on('close', () => log('\nClient disconnected\n', 'FgRed'));
    });

    log(`WebSocket server is running on ${process.env.WEB_SOCKET_URL}`, 'FgGreen');
  }
}
