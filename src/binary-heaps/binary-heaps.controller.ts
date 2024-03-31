import { Controller, Get } from '@nestjs/common';
import { BinaryHeapsService } from './binary-heaps.service';

@Controller('binary-heaps')
export class BinaryHeapsController {
  constructor(private readonly binaryHeapsService: BinaryHeapsService) {}

  @Get('test66')
  test66(): void {
    return this.binaryHeapsService.test66();
  }

  @Get('test67')
  test67(): void {
    return this.binaryHeapsService.test67();
  }

  @Get('priorityQueue')
  priorityQueue(): void {
    return this.binaryHeapsService.priorityQueue();
  }
}
