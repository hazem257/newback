import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ تفعيل CORS لجميع المواقع
app.enableCors({
  origin: [
    'http://localhost:5173',       // وقت التطوير
    'https://hazemgamal-sable.vercel.app/', // لينك الفرونت بعد الديبلاي
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});


  await app.listen(3000);
}
bootstrap();
