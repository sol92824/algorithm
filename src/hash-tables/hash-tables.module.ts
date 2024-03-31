import { Module } from '@nestjs/common';
import { HashTablesService } from './hash-tables.service';
import { HashTablesController } from './hash-tables.controller';

@Module({
  controllers: [HashTablesController],
  providers: [HashTablesService],
})
export class HashTablesModule {}
