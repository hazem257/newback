import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) {
  throw new Error('MONGO_URL environment variable is not defined');
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // بحيث كل الملفات تشوف المتغيرات
    }),
    MongooseModule.forRoot(mongoUrl),
    MulterModule.register({
      storage: memoryStorage(), // تخزين مؤقت للملفات
    }),
    ProjectsModule,
  ],
})
export class AppModule {}
