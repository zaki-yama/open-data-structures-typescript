import ArrayStack from "./ArrayStack";

export default class AdjacencyLists {
  n: number;
  adj: Array<ArrayStack<number>>;

  constructor(n: number) {
    this.n = n;
    this.adj = Array.from({ length: n }).map(_ => new ArrayStack<number>());
  }

  private createBooleanMatrix(i: number, j: number) {
    return Array.from({ length: i }).map(_ =>
      Array.from({ length: j }).map(__ => false)
    );
  }

  addEdge(i: number, j: number) {
    this.adj[i].addLast(j);
  }

  removeEdge(i: number, j: number) {
    for (let k = 0; k < this.adj[i].size(); k++) {
      if (this.adj[i].get(k) === j) {
        this.adj[i].remove(k);
        return;
      }
    }
  }

  hasEdge(i: number, j: number) {
    for (let k = 0; k < this.adj[i].size(); k++) {
      if (this.adj[i].get(k) === j) {
        return true;
      }
    }
    return false;
  }

  outEdges(i: number) {
    const res: number[] = [];
    for (let k = 0; k < this.adj[i].size(); k++) {
      res.push(this.adj[i].get(k));
    }
    return res;
  }

  inEdges(i: number) {
    const res: number[] = [];
    for (let j = 0; j < this.n; j++) {
      for (let k = 0; k < this.adj[j].size(); k++) {
        if (this.adj[j].get(k) === i) {
          res.push(j);
          break;
        }
      }
    }
    return res;
  }
}
