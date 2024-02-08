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
  getSecond(): string[] {
    return [
      'this is 1 route',
      'this is 2 route',
      'this is 3 route',
      'this is 4 route',
      'this is 5 route',
    ];
  }

  @Get('/fourth')
  getThird(): string {
    return 'this is fourth route';
  }
}
