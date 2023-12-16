import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AppService {
  constructor(private readonly repository: AppRepository) {
  }

  encode(secret: string, password: string) {
    const key = CryptoJS.enc.Base64.parse(secret).toString(CryptoJS.enc.Utf8);
    return CryptoJS.AES.encrypt(password, key).toString(
      CryptoJS.format.OpenSSL);
  }
}
