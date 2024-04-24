import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World';
  }

  async getDataWithKey(key: string) {
    await this.delay(2000);

    // so strong!
    if (key !== 'rahasianegara') {
      throw new UnauthorizedException();
    }
    return {
      message: 'dummy api with api key',
      data: 'the secret data you could get when you have a key.',
    };
  }

  async delay(time: number) {
    return await new Promise((res) => setTimeout(() => res(''), time));
  }
}
