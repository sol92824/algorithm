import { Injectable } from '@nestjs/common';

@Injectable()
export class StackService {
  stackMadeWithArray() {
    const stack = [];

    // 입력값을 push로 배열의 마지막에 추가
    stack.push('google');
    stack.push('instagram');
    stack.push('youtube');

    console.log(stack);

    // 출력값을 pop으로 배열의 마지막에서 제거
    console.log(stack.pop());
    console.log(stack.pop());

    stack.push('amazon');

    console.log(stack.pop());

    const stack2 = [];

    // 입력값을 unshift로 배열의 처음에 추가
    stack2.unshift('create new file');
    stack2.unshift('resized file');
    stack2.unshift('cloned out wrinkle');

    console.log(stack2);

    // 출력값을 shift로 배열의 처음에서 제거
    console.log(stack2.shift());
    console.log(stack2.shift());
    console.log(stack2.shift());
  }
}

class Stack {
  first: Node;
  last: Node;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // 1. value를 인자로 받는 push 함수 생성
  push(value: any): number {
    // 2. value로 새로운 Node 생성
    const newNode = new Node(value);

    // 3. Stack이 Node를 가지고 있지 않으면, first와 last 속성을 새로 생성된 Node로 설정
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // 4. Stack에 Node가 하나라도 있다면, first 속성을 저장할 변수 생성
      const currentFirst = this.first;

      // 5. first 속성을 새로 생성된 Node로 재설정
      this.first = newNode;

      // 6. 새로 생성된 Node의 next 속성을 4번에서 생성된 변수로 설정
      this.first.next = currentFirst;
    }

    // 7. Stack의 size 속성 1 증가 및 리턴
    return ++this.size;
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
