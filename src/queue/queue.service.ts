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
