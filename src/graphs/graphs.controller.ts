import { Controller, Get } from '@nestjs/common';
import { GraphsService } from './graphs.service';

@Controller('graphs')
export class GraphsController {
  constructor(private readonly graphsService: GraphsService) {}

  @Get('test68')
  test68(): void {
    return this.graphsService.test68();
  }

  @Get('test69')
  test69(): void {
    return this.graphsService.test69();
  }

  @Get('test70')
  test70(): void {
    return this.graphsService.test70();
  }

  @Get('test71')
  test71(): void {
    return this.graphsService.test71();
  }

  @Get('graphs')
  graphs(): void {
    return this.graphsService.graphs();
  }
}
