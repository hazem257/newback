import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ CORS
  app.enableCors({
    origin: ['http://localhost:5173', 'https://hazemgamal-sable.vercel.app'], 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // ✅ خلي السيرفر يسمع على الـ PORT اللي Railway بيبعتُه
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Server is running on port ${port}`);
}
bootstrap();
