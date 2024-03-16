import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { LobbysGateway } from '../lobby/lobbys.gateway';

@Module({
  providers: [EventsGateway, LobbysGateway],
})
export class EventsModule {}  