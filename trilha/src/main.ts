import otelSDK from '@gabriel.cora/eng.soft.jogo.da.trilha.core/dist/open-telemetry/tracer';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  await otelSDK.start();

  const app = await NestFactory.create(AppModule);

  app.useLogger(app.get(Logger));

  app.enableCors();

  await app.listen(90);
}
bootstrap();
