import { NestFactory } from '@nestjs/core';
import { AntenModule } from './anten.module';

async function bootstrap() {
  const app = await NestFactory.create(AntenModule);
  await app.listen(3000);
}
bootstrap();
