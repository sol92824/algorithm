import { Controller } from '@nestjs/common';
import { HashTablesService } from './hash-tables.service';

@Controller('hash-tables')
export class HashTablesController {
  constructor(private readonly hashTablesService: HashTablesService) {}
}
