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

    const ht2 = new HashTable(17);
    ht2.set('maroon', '#800000');
    ht2.set('yellow', '#FFFF00');
    ht2.set('olive', '#808000');
    ht2.set('salmon', '#FA8072');
    ht2.set('lightcoral', '#F08080');
    ht2.set('mediumvioletred', '#C71585');
    ht2.set('plum', '#DDA0DD');
    ht2.set('purple', '#DDA0DD');
    ht2.set('violet', '#DDA0DD');

    console.log(ht2.get('yellow'));

    console.log(ht2.keys());
    console.log(ht2.values());
  }
}

class HashTable {
  keyMap: any[];

  constructor(size = 53) {
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

  get(key: string) {
    // 1. _hash 함수를 통해 keyMap에서 조회할 인덱스 위치 받아오기
    const index = this._hash(key);

    // 2. 해당 인덱스가 비어있지 않다면
    if (this.keyMap[index]) {
      // 2-1. 해당 인덱스에 존재하는 배열의 크기만큼 반복문 실행
      for (let i = 0; i < this.keyMap[index].length; i++) {
        // 2-2. 입력한 키와 동일한 값을 0번째 인덱스에 가진 배열이 나오면 리턴
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    // 3. 해당 인덱스를 모두 조회했음에도 값을 리턴하지 못했다면 값이 없는 것이므로 undefined 반환
    return undefined;
  }

  values() {
    const valuesArr = [];

    // 1. 전체 keyMap의 크기만큼 순회
    for (let i = 0; i < this.keyMap.length; i++) {
      // 2. 값을 가진 인덱스가 있다면
      if (this.keyMap[i]) {
        // 3. 해당 값을 가진 인덱스의 배열의 크기만큼 순회
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // 4. 동일한 값을 가지지 않은 경우에만 push
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valuesArr;
  }

  keys() {
    const keysArr = [];

    // 1. 전체 keyMap의 크기만큼 순회
    for (let i = 0; i < this.keyMap.length; i++) {
      // 2. 값을 가진 인덱스가 있다면
      if (this.keyMap[i]) {
        // 3. 해당 값을 가진 인덱스의 배열의 크기만큼 순회
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // 4. 동일한 값을 가지지 않은 경우에만 push
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keysArr;
  }
}
