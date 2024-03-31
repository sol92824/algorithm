import { Controller, Get } from '@nestjs/common';
import { BinarySearchTreeService } from './binary-search-tree.service';

@Controller('binary-search-tree')
export class BinarySearchTreeController {
  constructor(
    private readonly binarySearchTreeService: BinarySearchTreeService,
  ) {}

  @Get('test59')
  test59(): void {
    return this.binarySearchTreeService.test59();
  }

  @Get('test60')
  test60(): void {
    return this.binarySearchTreeService.test60();
  }

  @Get('test62')
  test62(): void {
    return this.binarySearchTreeService.test62();
  }
}
