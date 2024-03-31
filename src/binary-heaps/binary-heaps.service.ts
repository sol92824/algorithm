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

  test67() {
    const binaryHeap = new MaxBinaryHeap();

    binaryHeap.insert(1);
    binaryHeap.insert(2);
    binaryHeap.insert(3);
    binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(6);
    binaryHeap.extractMax();
    console.log(binaryHeap.values[0]);

    console.log(binaryHeap.values);

    binaryHeap.extractMax();
    console.log(binaryHeap.values);

    binaryHeap.extractMax();
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

  extractMax(): number {
    const max = this.values[0];
    const end = this.values.pop();

    // pop이 완료된 heap 배열에 담긴 것이 없다면, 다시 값을 지정해서 sinkDown할 필요가 없으므로 조건문 추가
    if (this.values.length > 0) {
      this.values[0] = end;

      this.sinkDown();
    }

    return max;
  }

  sinkDown(): void {
    // 1. sinkDown을 위해 root가 된 노드이기 때문에 0번째 인덱스에 위치
    let idx = 0;
    const element = this.values[0];

    // 2. 전체 길이를 length 변수에 할당
    const length = this.values.length;

    while (true) {
      // 3. 왼쪽/오른쪽 자식 노드의 인덱스 및 값 설정을 위한 변수와 값을 바꿀 인덱스 정보가 존재하는 swap 변수 설정
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      // 4. 왼쪽 자식 노드가 전체 길이를 초과하지 않는다면
      if (leftChildIdx < length) {
        // 4-1. 왼쪽 자식 노드의 값 할당
        leftChild = this.values[leftChildIdx];

        // 4-2. 왼쪽 자식 노드가 현재 값보다 크다면 swap에 왼쪽 자식 노드의 인덱스 정보 할당
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      // 5. 오른쪽 자식 노드가 전체 길이를 초과하지 않는다면
      if (rightChildIdx < length) {
        // 5-1. 오른쪽 자식 노드의 값 할당
        rightChild = this.values[rightChildIdx];

        // 5-2.
        // swap이 4-2번으로 인해 할당되지 않고, 오른쪽 자식 노드가 현재 값보다 크거나
        // swap이 4-2번으로 인해 할당되었지만, 오른쪽 자식 노드가 왼쪽 자식 노드보다 값이 크다면
        // swap에 오른쪽 자식 노드의 인덱스 정보 할당
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      // 6. 위 과정을 거쳤음에도 swap에 할당된 값이 없다면 올바른 위치이므로 반복문 해제
      if (swap === null) {
        break;
      }

      // 7. 반복문이 해제되지 않았다면, swap을 이용해 부모와 자식의 위치 바꿔주고, 다음 반복문을 위해 idx를 swap으로 재설정
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
