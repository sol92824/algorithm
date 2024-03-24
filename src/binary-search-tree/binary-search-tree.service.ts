import { Injectable } from '@nestjs/common';

@Injectable()
export class BinarySearchTreeService {}

class BinarySearchTree {
  root: any;

  constructor() {
    this.root = null;
  }
}

class Node {
  value: any;
  left: any;
  right: any;

  constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
