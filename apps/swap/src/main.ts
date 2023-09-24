import { NestFactory } from '@nestjs/core';
import { SwapModule } from './swap.module';

async function bootstrap() {
  const app = await NestFactory.create(SwapModule);
  await app.listen(3000);
}
bootstrap();
