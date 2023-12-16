import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('encode')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('')
  encode(@Query('key') key: string, @Query('password') password) {
    return this.appService.encode(key, password);
  }

  @Get('test')
  test() {
    return 'toan ga';
  }
}
