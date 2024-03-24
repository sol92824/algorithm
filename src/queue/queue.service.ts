import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueService {
  queueMadeWithArray() {
    const queue = [];

    // 입력값을 push로 배열의 마지막에 추가
    queue.push('FIRST');
    queue.push('SECOND');
    queue.push('THIRD');

    console.log(queue);

    // 출력값을 shift로 배열의 처음에서 제거
    console.log(queue.shift());
    console.log(queue.shift());
    console.log(queue.shift());

    const queue2 = [];

    // 입력값을 unshift로 배열의 처음에 추가
    queue2.unshift('FIRST');
    queue2.unshift('SECOND');
    queue2.unshift('THIRD');

    console.log(queue2);

    // 출력값을 pop으로 배열의 마지막에서 제거
    console.log(queue2.pop());
    console.log(queue2.pop());
    console.log(queue2.pop());
  }
}

class Queue {
  first: Node;
  last: Node;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // 1. value를 인자로 받는 enqueue 함수 생성
  enqueue(value: any) {
    // 2. value로 새로운 Node 생성
    const newNode = new Node(value);

    // 3. Stack이 Node를 가지고 있지 않으면, first와 last 속성을 새로 생성된 Node로 설정
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // 4. Stack에 Node가 하나라도 있다면, last.next 속성을 2번에서 생성된 변수로 설정
      this.last.next = newNode;

      // 5. last 속성을 2번에서 생성된 변수로 설정
      this.last = newNode;
    }

    // 6. Stack의 size 속성 1 증가 및 리턴
    return ++this.size;
  }

  // 1. 인자를 받지 않는 dequeue 함수 생성
  dequeue() {
    // 2. Stack이 Node를 가지고 있지 않으면, null 리턴
    if (this.size === 0) {
      return null;
    }

    // 3. Stack의 first 속성을 저장할 변수 생성
    const currentFirst = this.first;

    if (this.size === 1) {
      // 4. Stack이 Node를 하나만 가지고 있다면, last 속성을 null로 설정
      this.last = null;
    }

    // 5. Stack의 first 속성을 다음값인 first.next로 재설정
    this.first = this.first.next;

    // 6. Stack의 size 속성 1 감소
    this.size--;

    // 7. 삭제한 첫번째 Node의 value 리턴
    return currentFirst.value;
  }
}

class Node {
  value: any;
  next: Node;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
