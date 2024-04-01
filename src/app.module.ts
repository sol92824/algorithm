import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StackModule } from './stack/stack.module';
import { QueueModule } from './queue/queue.module';
import { BinarySearchTreeModule } from './binary-search-tree/binary-search-tree.module';
import { BinaryHeapsModule } from './binary-heaps/binary-heaps.module';
import { HashTablesModule } from './hash-tables/hash-tables.module';
import { GraphsModule } from './graphs/graphs.module';
import { DynamicProgramModule } from './dynamic-program/dynamic-program.module';
import { TheWildWestModule } from './the-wild-west/the-wild-west.module';

@Module({
  imports: [
    StackModule,
    QueueModule,
    BinarySearchTreeModule,
    BinaryHeapsModule,
    HashTablesModule,
    GraphsModule,
    DynamicProgramModule,
    TheWildWestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
