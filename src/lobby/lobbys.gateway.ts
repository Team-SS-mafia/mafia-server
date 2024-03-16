import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ transports: ['websocket'] })
export class LobbysGateway
{
  // lobby number
  private readonly lobby: number = 0;

  getLobby(): number{
    return this.lobby;
  }
  
  // 로비에서 나가는 함수
  funcQuitLobby(client: Socket, clients: Socket[]){
    const index = clients.indexOf(client);
      if (index !== -1) {
        clients.splice(index, 1);
    }
  }
}