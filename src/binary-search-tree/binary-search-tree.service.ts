import { Injectable } from '@nestjs/common';

@Injectable()
export class BinarySearchTreeService {
  test59() {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(15);
    binarySearchTree.insert(20);
    binarySearchTree.insert(10);
    binarySearchTree.insert(12);

    console.log(binarySearchTree.root.value);
    console.log(binarySearchTree.root.right.value);
    console.log(binarySearchTree.root.left.right.value);

    const binarySearchTree2 = new BinarySearchTree();
    binarySearchTree2.insert(15).insert(20).insert(10).insert(12);

    console.log(binarySearchTree.root.value);
    console.log(binarySearchTree.root.right.value);
    console.log(binarySearchTree.root.left.right.value);
  }
}

class BinarySearchTree {
  root: Node;

  constructor() {
    this.root = null;
  }

  insert(value: any): BinarySearchTree | undefined {
    // 1. 입력된 value로 새로운 Node 생성
    const newNode = new Node(value);

    // 2. root가 없다면, 새로운 Node를 root로 설정
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    // 3. 반복문 실행
    while (true) {
      // 4. 이미 트리에 존재하는 값을 입력하면 undefined 반환
      if (current.value === value) {
        return undefined;
      }

      // 5. 입력된 값이 현재 위치의 값보다 작으면 왼쪽
      if (current.value > value) {
        // 5-1. 왼쪽이 비어있으면 새로운 노드로 채우기
        if (current.left === null) {
          current.left = newNode;
          return this;
        }

        // 5-2. 비어있지 않다면 현재 위치 왼쪽 노드로 이동
        current = current.left;
      }
      // 6. 입력된 값이 현재 위치의 값보다 크면 오른쪽
      else {
        // 6-1. 오른쪽이 비어있으면 새로운 노드로 채우기
        if (current.right === null) {
          current.right = newNode;

          return this;
        }

        // 6-2. 비어있지 않다면 현재 위치 오른쪽 노드로 이동
        current = current.right;
      }
    }
  }
}

class Node {
  value: any;
  left: Node;
  right: Node;

  constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
