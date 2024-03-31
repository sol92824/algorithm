import { Injectable } from '@nestjs/common';

@Injectable()
export class HashTablesService {
  hash(key: string, arrayLen: number): number {
    let total = 0;
    for (const char of key) {
      const value = char.charCodeAt(0) - 96;
      total = (total + value) % arrayLen;
    }

    return total;
  }

  hashUpgrade(key: string, arrayLen: number): number {
    let total = 0;
    // 1. 해시테이블에 소수를 활용하면 충돌이 줄어든다고 함 (숫자가 큰 소수일수록 좋음)
    const WEIRD_PRIME = 31;

    // 2. 입력되는 key에 따라 해시테이블 처리 속도가 증가하기 때문에 최대 100으로 limit 설정
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }

    return total;
  }
}
