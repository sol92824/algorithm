import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StackModule } from './stack/stack.module';
import { QueueModule } from './queue/queue.module';
import { BinarySearchTreeModule } from './binary-search-tree/binary-search-tree.module';
import { BinaryHeapsModule } from './binary-heaps/binary-heaps.module';

@Module({
  imports: [
    StackModule,
    QueueModule,
    BinarySearchTreeModule,
    BinaryHeapsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
