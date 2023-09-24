import { Controller, Get } from '@nestjs/common';
import { AntenService } from './anten.service';

@Controller()
export class AntenController {
  constructor(private readonly antenService: AntenService) {}

  @Get()
  getHello(): string {
    return this.antenService.getHello();
  }
}
