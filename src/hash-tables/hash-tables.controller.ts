import { Controller, Get } from '@nestjs/common';
import { HashTablesService } from './hash-tables.service';

@Controller('hash-tables')
export class HashTablesController {
  constructor(private readonly hashTablesService: HashTablesService) {}

  @Get('hashTable')
  hashTable(): void {
    return this.hashTablesService.hashTable();
  }
}
