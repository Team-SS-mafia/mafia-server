import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway({ transports: ['websocket'] })
  export class RoomsGateway
  {
    // lobby number
    readonly lobby: number = 0;

    
  }