import { Module } from '@nestjs/common';
import { AntenController } from './anten.controller';
import { AntenService } from './anten.service';

@Module({
  imports: [],
  controllers: [AntenController],
  providers: [AntenService],
})
export class AntenModule {}
