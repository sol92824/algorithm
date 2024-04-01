import { Controller, Get } from '@nestjs/common';
import { TheWildWestService } from './the-wild-west.service';

@Controller('the-wild-west')
export class TheWildWestController {
  constructor(private readonly theWildWestService: TheWildWestService) {}

  @Get('test77')
  test77(): void {
    return this.theWildWestService.test77();
  }

  @Get('test78')
  test78(): void {
    return this.theWildWestService.test78();
  }

  @Get('test79')
  test79(): void {
    return this.theWildWestService.test79();
  }
}
