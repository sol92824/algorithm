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

  test71() {
    const graph = new Graph();

    graph.addVertex('S');
    graph.addVertex('P');
    graph.addVertex('U');
    graph.addVertex('X');
    graph.addVertex('Q');
    graph.addVertex('Y');
    graph.addVertex('V');
    graph.addVertex('R');
    graph.addVertex('W');
    graph.addVertex('T');

    graph.addEdge('S', 'P');
    graph.addEdge('S', 'U');

    graph.addEdge('P', 'X');
    graph.addEdge('U', 'X');

    graph.addEdge('P', 'Q');
    graph.addEdge('U', 'V');

    graph.addEdge('X', 'Q');
    graph.addEdge('X', 'Y');
    graph.addEdge('X', 'V');

    graph.addEdge('Q', 'R');
    graph.addEdge('Y', 'R');

    graph.addEdge('Y', 'W');
    graph.addEdge('V', 'W');

    graph.addEdge('R', 'T');
    graph.addEdge('W', 'T');

    console.log(graph.depthFirstRecursive('S'));
    console.log(graph.depthFirstIterative('S'));
  }

  test72() {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'D');

    console.log(graph.adjacencyList['A']);
    console.log(graph.adjacencyList['B']);
    console.log(graph.adjacencyList['C']);
    console.log(graph.adjacencyList['D']);
  }

  test73() {
    const graph = new Graph();

    graph.addVertex('S');
    graph.addVertex('P');
    graph.addVertex('U');
    graph.addVertex('X');
    graph.addVertex('Q');
    graph.addVertex('Y');
    graph.addVertex('V');
    graph.addVertex('R');
    graph.addVertex('W');
    graph.addVertex('T');

    graph.addEdge('S', 'P');
    graph.addEdge('S', 'U');

    graph.addEdge('P', 'X');
    graph.addEdge('U', 'X');

    graph.addEdge('P', 'Q');
    graph.addEdge('U', 'V');

    graph.addEdge('X', 'Q');
    graph.addEdge('X', 'Y');
    graph.addEdge('X', 'V');

    graph.addEdge('Q', 'R');
    graph.addEdge('Y', 'R');

    graph.addEdge('Y', 'W');
    graph.addEdge('V', 'W');

    graph.addEdge('R', 'T');
    graph.addEdge('W', 'T');

    console.log(graph.breadthFirst('S'));
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

  depthFirstRecursive(start: any): any[] {
    // 1. 나중에 리턴할 배열과 이미 방문한 노드를 표기할 객체 생성
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    // 2. 헬퍼 함수 생성
    (function dfs(vertex) {
      // 3. 방문할 노드가 비어있으면 null 리턴
      if (!vertex) {
        return null;
      }

      // 4. visited / resulted 업데이트
      visited[vertex] = true;
      result.push(vertex);

      // 5. 현재 노드에 연결된 노드를 순회
      adjacencyList[vertex].forEach((neighbor) => {
        // 6. 방문한 기록이 없는 인접 노드일 경우에만 해당 로직 재실행
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  depthFirstIterative(start: any): any[] {
    // 1. 나중에 리턴할 배열과 이미 방문한 노드를 표기할 객체 생성
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    // 2. 스택에 더 이상 방문할 노드가 남아있지 않을 때까지 순회
    while (stack.length) {
      // 3. pop()을 통해서 제일 마지막에 입력된 노드 우선 실행
      currentVertex = stack.pop();
      // 4. resulted 업데이트
      result.push(currentVertex);

      // 5. 현재 노드에 연결된 노드를 순회
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        // 6. 방문한 기록이 없는 인접 노드일 경우에만 visited 업데이트 및 stack 업데이트
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  breadthFirst(start: any): any[] {
    // 1. 나중에 리턴할 배열과 이미 방문한 노드를 표기할 객체 생성
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    // 2. 큐에 더 이상 방문할 노드가 남아있지 않을 때까지 순회
    while (queue.length) {
      // 3. shift()을 통해서 제일 먼저 입력된 노드 우선 실행
      currentVertex = queue.shift();
      // 4. resulted 업데이트
      result.push(currentVertex);

      // 5. 현재 노드에 연결된 노드를 순회
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        // 6. 방문한 기록이 없는 인접 노드일 경우에만 visited 업데이트 및 queue 업데이트
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}
