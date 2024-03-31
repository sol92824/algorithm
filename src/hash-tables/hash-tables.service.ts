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

  hashTable() {
    const ht = new HashTable();
    console.log(ht.set('hello world', 'goodbye!!'));
    console.log(ht.set('dogs', 'are cool'));
    console.log(ht.set('cats', 'are fine'));
    console.log(ht.set('i love', 'pizza'));
    console.log(ht.set('hi', 'bye'));
    console.log(ht.set('french', 'fries'));
    console.log(ht.keyMap);
  }
}

class HashTable {
  keyMap: any[];

  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key: string) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key: string, value: any) {
    // 1. _hash 함수를 통해 keyMap에 담을 인덱스 위치 받아오기
    const index = this._hash(key);

    // 2. 만약 keyMap[index]에 해당하는 위치에 값이 없었다면 빈 배열 우선 생성
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    // 3. keyMap[index]의 값인 배열에 현재 입력된 데이터 넣어주기
    this.keyMap[index].push([key, value]);

    return index;
  }
}
