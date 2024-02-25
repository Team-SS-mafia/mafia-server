import { Module } from '@nestjs/common';
import { LobbysGateway } from './lobbys.gateway';

@Module({
  providers: [LobbysGateway],
})
export class LobbysModule {}  