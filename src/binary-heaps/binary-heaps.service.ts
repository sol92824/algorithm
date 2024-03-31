import { Injectable } from '@nestjs/common';

@Injectable()
export class BinaryHeapsService {
  test66() {
    const binaryHeap = new MaxBinaryHeap();
    binaryHeap.insert(1);
    console.log(binaryHeap.values[0]);

    binaryHeap.insert(2);
    console.log(binaryHeap.values[0]);

    console.log(binaryHeap.values);

    binaryHeap.insert(3);
    console.log(binaryHeap.values[0]);

    console.log(binaryHeap.values);

    binaryHeap.insert(4);
    console.log(binaryHeap.values[0]);

    console.log(binaryHeap.values);

    binaryHeap.insert(5);
    console.log(binaryHeap.values[0]);

    console.log(binaryHeap.values);

    binaryHeap.insert(6);
    console.log(binaryHeap.values[0]);

    console.log(binaryHeap.values);
  }
}

class MaxBinaryHeap {
  values: number[];

  constructor() {
    this.values = [];
  }

  insert(element): void {
    this.values.push(element);

    this.bubbleUp();
  }

  bubbleUp(): void {
    // 1. 마지막에 입력된 요소의 인덱스 추출
    let idx = this.values.length - 1;
    // 2. 마지막 요소의 값 추출
    const element = this.values[idx];

    // 3. 현재 입력한 값이 0 이하로 내려가면 root가 된 것이기 때문에 반복문을 더 이상 실행할 필요가 없음
    while (idx > 0) {
      // 4. 부모 노드의 값과 인덱스 추출
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];

      // 5. 현재 입력한 값이 부모보다 작으면 bubbleUp 할 필요가 없으므로 반복문 실행 중지
      if (element <= parent) {
        break;
      }

      // 6. 부모와 자식의 위치 바꿔주고, 다음 반복문을 위해 idx를 현재 위치의 인덱스로 재설정
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}
