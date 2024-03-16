import { Module } from '@nestjs/common';
import { LobbysGateway } from './lobbys.gateway';

@Module({
  providers: [LobbysGateway],
  exports: [LobbysGateway],
})
export class LobbysModule {}  