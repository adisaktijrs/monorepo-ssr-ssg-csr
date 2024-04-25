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

  async getSlowData() {
    await this.delay(3000);

    return {
      message: 'dummy api with api key',
      data: 'the slow api with 3 seconds delay.',
    };
  }

  async getSlowDataWithServerTime() {
    await this.delay(3000);
    const date = new Date();

    return {
      message: 'dummy api with api key',
      data: `the slow api with 3 seconds delay. Server time: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
    };
  }

  async getSuperSlowData() {
    await this.delay(5000);

    return {
      message: 'dummy api with api key',
      data: 'the slow api with 5 seconds delay.',
    };
  }

  async delay(time: number) {
    return await new Promise((res) => setTimeout(res, time));
  }
}
