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

  test74() {
    const g = new WeightedGraph();

    g.addVertex('A');
    g.addVertex('Z');
    g.addVertex('C');
    g.addVertex('D');
    g.addVertex('E');
    g.addVertex('H');
    g.addVertex('Q');
    g.addVertex('G');

    g.addEdge('A', 'Z', 7);
    g.addEdge('A', 'C', 8);

    g.addEdge('Z', 'Q', 2);

    g.addEdge('C', 'G', 4);

    g.addEdge('D', 'Q', 8);

    g.addEdge('E', 'H', 1);

    g.addEdge('H', 'Q', 3);

    g.addEdge('Q', 'C', 6);

    g.addEdge('G', 'Q', 9);

    console.log(g.Dijkstra('A', 'E'));
    console.log(g.Dijkstra('A', 'Q'));
    console.log(g.Dijkstra('A', 'G'));
    console.log(g.Dijkstra('A', 'D'));
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

class WeightedGraph {
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

  addEdge(vertex1: any, vertex2: any, weight: any): void {
    // 1. 양방향 연결을 위해 v1 -> v2 / v2 -> v1 두 개의 연결 동시 생성
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start: any, finish: any) {
    // 1. 거리 / 가까운 이전 노드를 표기할 객체 생성
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    // 2. distances / nodes / previous 값 초기화
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // 3. 큐에 데이터가 존재하는 동안 지속 순회
    while (nodes.values.length) {
      // 4. 우선순위가 가장 높은 큐의 값 추출
      smallest = nodes.dequeue().val;

      // 5. 도착지점에 도달했다면, path에 이전 노드 추적해서 추가
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        // 6. 인접 노드 순회
        for (const neighbor in this.adjacencyList[smallest]) {
          const nextNode = this.adjacencyList[smallest][neighbor];
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;

          // 7. 현재 가중치를 포함한 값이 기존에 보유한 값보다 작다면 distances / previous 업데이트 및 우선순위 큐 삽입
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  values: Node[];

  constructor() {
    this.values = [];
  }

  enqueue(val, priority): void {
    const newNode = new Node(val, priority);
    this.values.push(newNode);

    this.bubbleUp();
  }

  bubbleUp(): void {
    // 1. 마지막에 입력된 요소의 인덱스 추출
    let idx = this.values.length - 1;
    // 2. 마지막 요소의 값 추출
    const element = this.values[idx];

    // 3. 현재 입력한 값이 0 이하로 내려가면 root가 된 것이기 때문에 반복문을 더 이상 실행할 필요가 없음
    while (idx > 0) {
      // 4. 부모 노드의 값과 인덱스 추출
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];

      // 5. 현재 입력한 값이 부모보다 크다면 bubbleUp 할 필요가 없으므로 반복문 실행 중지
      if (element.priority >= parent.priority) {
        break;
      }

      // 6. 부모와 자식의 위치 바꿔주고, 다음 반복문을 위해 idx를 현재 위치의 인덱스로 재설정
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue(): Node {
    const min = this.values[0];
    const end = this.values.pop();

    // pop이 완료된 heap 배열에 담긴 것이 없다면, 다시 값을 지정해서 sinkDown할 필요가 없으므로 조건문 추가
    if (this.values.length > 0) {
      this.values[0] = end;

      this.sinkDown();
    }

    return min;
  }

  sinkDown(): void {
    // 1. sinkDown을 위해 root가 된 노드이기 때문에 0번째 인덱스에 위치
    let idx = 0;
    const element = this.values[0];

    // 2. 전체 길이를 length 변수에 할당
    const length = this.values.length;

    while (true) {
      // 3. 왼쪽/오른쪽 자식 노드의 인덱스 및 값 설정을 위한 변수와 값을 바꿀 인덱스 정보가 존재하는 swap 변수 설정
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      // 4. 왼쪽 자식 노드가 전체 길이를 초과하지 않는다면
      if (leftChildIdx < length) {
        // 4-1. 왼쪽 자식 노드의 값 할당
        leftChild = this.values[leftChildIdx];

        // 4-2. 왼쪽 자식 노드가 현재 값보다 작다면 swap에 왼쪽 자식 노드의 인덱스 정보 할당
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      // 5. 오른쪽 자식 노드가 전체 길이를 초과하지 않는다면
      if (rightChildIdx < length) {
        // 5-1. 오른쪽 자식 노드의 값 할당
        rightChild = this.values[rightChildIdx];

        // 5-2.
        // swap이 4-2번으로 인해 할당되지 않고, 오른쪽 자식 노드가 현재 값보다 작거나
        // swap이 4-2번으로 인해 할당되었지만, 오른쪽 자식 노드가 왼쪽 자식 노드보다 값이 작다면
        // swap에 오른쪽 자식 노드의 인덱스 정보 할당
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      // 6. 위 과정을 거쳤음에도 swap에 할당된 값이 없다면 올바른 위치이므로 반복문 해제
      if (swap === null) {
        break;
      }

      // 7. 반복문이 해제되지 않았다면, swap을 이용해 부모와 자식의 위치 바꿔주고, 다음 반복문을 위해 idx를 swap으로 재설정
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  val: any;
  priority: number;

  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
