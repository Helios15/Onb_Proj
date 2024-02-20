import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  // app.use(cookieParser());
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  //app.register(fastifyMultipart);
  const config = new DocumentBuilder()
    .setTitle('Onboard project open API')
    .setDescription('Onboard project client')
    .setVersion('1.0')
    .addTag('Onboard project api interface')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`/api/v1`, app, document);
  await app.listen(8080, '0.0.0.0');
}
bootstrap();
