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
}
