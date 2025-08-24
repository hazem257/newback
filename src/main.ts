import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('PORT:', process.env.PORT);
  console.log('Mongo URI:', process.env.MONGO_URI); // للتأكد من قيمة الـ URI

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://hazemgamal-sable.vercel.app'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
  console.log(`🚀 Server is running on port ${process.env.PORT || 3000}`);
}
bootstrap();
