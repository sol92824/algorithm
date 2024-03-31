import { Module } from '@nestjs/common';
import { BinaryHeapsService } from './binary-heaps.service';
import { BinaryHeapsController } from './binary-heaps.controller';

@Module({
  controllers: [BinaryHeapsController],
  providers: [BinaryHeapsService],
})
export class BinaryHeapsModule {}
