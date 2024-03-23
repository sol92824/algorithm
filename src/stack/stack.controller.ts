import { Controller, Get } from '@nestjs/common';
import { StackService } from './stack.service';

@Controller('stack')
export class StackController {
  constructor(private readonly stackService: StackService) {}

  @Get('stack-made-with-array')
  stackMadeWithArray(): void {
    return this.stackService.stackMadeWithArray();
  }

  @Get('test55')
  test55(): void {
    return this.stackService.test55();
  }

  @Get('test56')
  test56(): void {
    return this.stackService.test56();
  }
}
