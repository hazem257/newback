import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { CertificatesModule } from './certificates/certificates.module';

const mongoUrl = 'mongodb+srv://dragon:dragon211004@coursesdb.mo9saja.mongodb.net/portfolio';
if (!mongoUrl) {
  throw new Error('MONGO_URL environment variable is not defined');
}

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(mongoUrl),
    MulterModule.register({ storage: memoryStorage() }),
    ProjectsModule,
    CertificatesModule,
  ],
})
export class AppModule {}
