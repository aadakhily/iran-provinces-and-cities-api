import { NestFactory } from '@nestjs/core';
import { ProvincesModule } from "./provinces/provinces.module"

async function bootstrap() {
  const app = await NestFactory.create(ProvincesModule);
  await app.listen(3000);
}
bootstrap();
