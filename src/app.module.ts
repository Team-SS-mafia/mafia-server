import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { LobbysModule } from './lobby/lobbys.module';
import { RoomsModule } from './room/rooms.module';

@Module({
  imports: [EventsModule, LobbysModule, RoomsModule],
})
export class AppModule {}
