import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // decorator없는 요청은 제거된다.
      whitelist: true,
      // 화이트리스트에 없는 속성이 있다면 HttpException을 던진다. whitelist:true여야 작동한다.
      forbidNonWhitelisted: true,
      // URL에서 받아 오는 파라미터는 모두 String이다. 검증하는 데이터를 자동으로 타입을 변경한다.
      transform: true,
    }),
  );
  await app.listen(3333);
}
bootstrap();
