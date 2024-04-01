import { Controller, Get } from '@nestjs/common';
import { TheWildWestService } from './the-wild-west.service';

@Controller('the-wild-west')
export class TheWildWestController {
  constructor(private readonly theWildWestService: TheWildWestService) {}

  @Get('test77')
  test77(): void {
    return this.theWildWestService.test77();
  }
}
