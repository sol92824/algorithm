import { Injectable } from '@nestjs/common';

@Injectable()
export class HashTablesService {
  hash(key, arrayLen) {
    let total = 0;
    for (const char of key) {
      const value = char.charCodeAt(0) - 96;
      total = (total + value) % arrayLen;
    }

    return total;
  }
}
