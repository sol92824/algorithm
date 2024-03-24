import { Module } from '@nestjs/common';
import { BinarySearchTreeService } from './binary-search-tree.service';
import { BinarySearchTreeController } from './binary-search-tree.controller';

@Module({
  controllers: [BinarySearchTreeController],
  providers: [BinarySearchTreeService],
})
export class BinarySearchTreeModule {}
