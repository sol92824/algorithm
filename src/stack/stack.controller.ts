import { Controller, Get } from '@nestjs/common';
import { StackService } from './stack.service';

@Controller('stack')
export class StackController {
  constructor(private readonly stackService: StackService) {}
	
	@Get('stack-made-with-array')
	stackMadeWithArray(): void {
		return this.stackService.stackMadeWithArray();
	}
}
