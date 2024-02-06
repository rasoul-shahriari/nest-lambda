import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/second')
  getSecond(): string {
    return 'this is second route';
  }

  @Get('/fourth')
  getThird(): string {
    return 'this is fourth route';
  }
}
