import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import StorageModule from './storage/storage.module';
import { AppRepository } from './app.repository';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [StorageModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule {}
