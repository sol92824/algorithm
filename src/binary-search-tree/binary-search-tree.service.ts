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

  test60() {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(15).insert(20).insert(10).insert(12);

    const foundNode = binarySearchTree.find(20);
    console.log(foundNode.value);
    console.log(foundNode.left);
    console.log(foundNode.right);

    const binarySearchTree2 = new BinarySearchTree();

    binarySearchTree2.insert(15).insert(20).insert(10).insert(12);

    const foundNode2 = binarySearchTree2.find(120);

    console.log(foundNode2);
  }

  test61() {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12)
      .insert(1)
      .insert(5)
      .insert(50);

    console.log(binarySearchTree.DFSPreOrder());
    console.log(binarySearchTree.DFSInOrder());
    console.log(binarySearchTree.DFSPostOrder());
  }

  test62() {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12)
      .insert(1)
      .insert(5)
      .insert(50);

    console.log(binarySearchTree.breadthFirstSearch());
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

  find(value: number): undefined | Node {
    // 1. root가 존재하지 않으면, 검색할 노드가 없으므로 undefined 반환
    if (this.root === null) {
      return undefined;
    }

    let current = this.root;

    // 2. 검색할 노드에 값이 있는동안 반복문 실행
    while (current) {
      // 3. 입력된 값이 현재 위치의 값보다 작으면 왼쪽
      if (value < current.value) {
        current = current.left;
      }
      // 4. 입력된 값이 현재 위치의 값보다 크면 오른쪽
      else if (value > current.value) {
        current = current.right;
      }
      // 5. 입력된 값이 현재 위치의 값과 동일하면 현재 노드 반환
      else {
        return current;
      }
    }

    // 6. 노드의 끝에 도착했으나 값을 찾지 못했으므로 undefined 반환
    return undefined;
  }

  breadthFirstSearch(): any[] {
    const data = [];
    const queue = [];
    let currentNode = null;

    // 1. queue에 root로 설정
    queue.push(this.root);

    // 2. queue에 값이 있는 동안 반복문 수행
    while (queue.length) {
      // 3. 현재 노드는 queue에 제일 첫번째 노드로 설정
      currentNode = queue.shift();
      // 4. 현재 노드의 value를 data에 삽입
      data.push(currentNode.value);

      // 5. 현재 노드의 left 속성이 존재한다면, queue에 삽입
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      // 5. 현재 노드의 right 속성이 존재한다면, queue에 삽입
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    // 6. 현재까지 거쳐간 node의 value가 담긴 data 반환
    return data;
  }

  // 전위 순회
  DFSPreOrder(): any[] {
    const data = [];

    function traverse(currentNode) {
      data.push(currentNode.value);

      if (currentNode.left) {
        traverse(currentNode.left);
      }

      if (currentNode.right) {
        traverse(currentNode.right);
      }
    }

    traverse(this.root);

    return data;
  }

  // 후위 순회
  DFSPostOrder(): any[] {
    const data = [];

    function traverse(currentNode) {
      if (currentNode.left) {
        traverse(currentNode.left);
      }

      if (currentNode.right) {
        traverse(currentNode.right);
      }

      data.push(currentNode.value);
    }

    traverse(this.root);

    return data;
  }

  // 중위 순회
  DFSInOrder(): any[] {
    const data = [];

    function traverse(currentNode) {
      if (currentNode.left) {
        traverse(currentNode.left);
      }

      data.push(currentNode.value);

      if (currentNode.right) {
        traverse(currentNode.right);
      }
    }

    traverse(this.root);

    return data;
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
