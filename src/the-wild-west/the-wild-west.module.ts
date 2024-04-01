import { Module } from '@nestjs/common';
import { TheWildWestService } from './the-wild-west.service';
import { TheWildWestController } from './the-wild-west.controller';

@Module({
  controllers: [TheWildWestController],
  providers: [TheWildWestService],
})
export class TheWildWestModule {}
