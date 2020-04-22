export interface Graph {
  n: number;

  addEdge: (i: number, j: number) => void;
  removeEdge: (i: number, j: number) => void;
  hasEdge: (i: number, j: number) => boolean;
  outEdges: (i: number) => number[];
  inEdges: (i: number) => number[];
}
