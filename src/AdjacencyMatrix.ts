import { Graph } from "./Graph";
export default class AdjacencyMatrix implements Graph {
  a: boolean[][];
  n: number;

  constructor(n: number) {
    this.n = n;
    this.a = this.createBooleanMatrix(n, n);
  }

  private createBooleanMatrix(i: number, j: number) {
    return Array.from({ length: i }).map(_ =>
      Array.from({ length: j }).map(__ => false)
    );
  }
  addEdge(i: number, j: number) {
    this.a[i][j] = true;
  }

  removeEdge(i: number, j: number) {
    this.a[i][j] = false;
  }

  hasEdge(i: number, j: number) {
    return this.a[i][j];
  }

  outEdges(i: number) {
    const res: number[] = [];
    for (let j = 0; j < this.n; j++) {
      if (this.a[i][j]) res.push(j);
    }
    return res;
  }

  inEdges(i: number) {
    const res: number[] = [];
    for (let j = 0; j < this.n; j++) {
      if (this.a[j][i]) res.push(j);
    }
    return res;
  }
}
