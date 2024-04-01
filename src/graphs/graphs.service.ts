import { Injectable } from '@nestjs/common';

@Injectable()
export class GraphsService {
  test68() {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');

    console.log(graph.adjacencyList['A']);
    console.log(graph.adjacencyList['B']);
    console.log(graph.adjacencyList['C']);
  }
}

class Graph {
  adjacencyList: object;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // 1. adjacencyList에 해당 노드가 없을 경우에만 빈 배열 추가
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
}
