import { Controller, Get } from '@nestjs/common';
import { BinaryHeapsService } from './binary-heaps.service';

@Controller('binary-heaps')
export class BinaryHeapsController {
  constructor(private readonly binaryHeapsService: BinaryHeapsService) {}

  @Get('test66')
  test66(): void {
    return this.binaryHeapsService.test66();
  }
}
