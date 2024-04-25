import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api')
  getDataWithKey(@Query() query: Record<string, string>) {
    return this.appService.getDataWithKey(query.key);
  }

  @Get('/slow')
  getSlow() {
    return this.appService.getSlowData();
  }

  @Get('/slowest')
  getSuperSlow() {
    return this.appService.getSuperSlowData();
  }
}
