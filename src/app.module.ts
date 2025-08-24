import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
    MulterModule.register({
      storage: memoryStorage(), // لتخزين الملفات مؤقتًا بالذاكرة
    }),
    ProjectsModule,
  ],
})
export class AppModule {}
