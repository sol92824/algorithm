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

  test69() {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'D');

    graph.removeEdge('B', 'A');
    graph.removeEdge('C', 'D');

    console.log(graph.adjacencyList['A']);
    console.log(graph.adjacencyList['B']);
    console.log(graph.adjacencyList['C']);
    console.log(graph.adjacencyList['D']);
  }

  test70() {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'D');

    graph.removeVertex('C');
    graph.removeVertex('B');

    console.log(graph.adjacencyList['A']);
    console.log(graph.adjacencyList['D']);
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

  removeEdge(vertex1: any, vertex2: any): void {
    // 1. 양방향 연결 해제를 위해 v1 -> v2 / v2 -> v1 두 개의 연결 동시 삭제
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2,
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1,
    );
  }

  removeVertex(vertex: any): any {
    // 1. 양방향 연결 해제를 위해 삭제할 노드와 연결된 노드 리스트 순회
    while (this.adjacencyList[vertex].length) {
      // 2. removeEdge를 활용하여 v1 -> v2 / v2 -> v1 두 개의 연결 동시 삭제
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }
}
