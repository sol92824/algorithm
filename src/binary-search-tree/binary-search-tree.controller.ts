import { Controller } from '@nestjs/common';
import { BinarySearchTreeService } from './binary-search-tree.service';

@Controller('binary-search-tree')
export class BinarySearchTreeController {
  constructor(
    private readonly binarySearchTreeService: BinarySearchTreeService,
  ) {}
}
