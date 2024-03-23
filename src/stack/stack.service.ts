import { Injectable } from '@nestjs/common';

@Injectable()
export class StackService {
  stackMadeWithArray() {
    let stack = [];

    // 입력값을 push로 배열의 마지막에 추가
    stack.push("google");
    stack.push("instagram");
    stack.push("youtube");

    console.log(stack);

    // 출력값을 pop으로 배열의 마지막에서 제거
    console.log(stack.pop());
    console.log(stack.pop());

    stack.push("amazon");

    console.log(stack.pop());

    let stack2 = [];

    // 입력값을 unshift로 배열의 처음에 추가
    stack2.unshift("create new file");
    stack2.unshift("resized file");
    stack2.unshift("cloned out wrinkle");

    console.log(stack2);

    // 출력값을 shift로 배열의 처음에서 제거
    console.log(stack2.shift());
    console.log(stack2.shift());
    console.log(stack2.shift());
  }
}
