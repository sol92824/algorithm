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

  graphs() {
    const graph = new Graph();

    graph.addVertex('Dallas');
    graph.addVertex('Tokyo');
    graph.addVertex('Aspen');

    graph.addEdge('Dallas', 'Tokyo');
    graph.addEdge('Dallas', 'Aspen');

    console.log(graph.adjacencyList);
  }
}

class Graph {
  adjacencyList: object;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: any): void {
    // 1. adjacencyList에 해당 노드가 없을 경우에만 빈 배열 추가
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1: any, v2: any): void {
    // 1. 양방향 연결을 위해 v1 -> v2 / v2 -> v1 두 개의 연결 동시 생성
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}
