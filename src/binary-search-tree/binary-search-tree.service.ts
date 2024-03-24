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

    while (true) {
      if (current.value === value) {
        return undefined;
      }

      if (current.value > value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;

          return this;
        }

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
