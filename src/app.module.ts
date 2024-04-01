import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StackModule } from './stack/stack.module';
import { QueueModule } from './queue/queue.module';
import { BinarySearchTreeModule } from './binary-search-tree/binary-search-tree.module';
import { BinaryHeapsModule } from './binary-heaps/binary-heaps.module';
import { HashTablesModule } from './hash-tables/hash-tables.module';
import { GraphsModule } from './graphs/graphs.module';

@Module({
  imports: [
    StackModule,
    QueueModule,
    BinarySearchTreeModule,
    BinaryHeapsModule,
    HashTablesModule,
    GraphsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
