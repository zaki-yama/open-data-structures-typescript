import { Graph } from "./Graph";
import SLList from "./SLList";

type Color = "white" | "grey" | "black";

/**
 *  depth-first search (with recursive algorithm)
 */
export function dfs(g: Graph, r: number) {
  const c: Color[] = Array.from({ length: g.n }).map(_ => "white");
  dfsRecursive(g, r, c);
  console.log(c);
}

function dfsRecursive(g: Graph, i: number, c: Color[]) {
  c[i] = "grey";

  const edges = g.outEdges(i);
  edges.forEach(edge => {
    if (c[edge] === "white") {
      c[edge] = "grey"; // unnecessary?
      dfsRecursive(g, edge, c);
    }
  });
  c[i] = "black";
}

/**
 *  depth-first search (with stack)
 */
export function dfs2(g: Graph, r: number) {
  const c: Color[] = Array.from({ length: g.n }).map(_ => "white");
  const s = new SLList<number>();
  s.push(r);
  while (s.size() > 0) {
    const i = s.pop()!;
    c[i] = "grey";
    const edges = g.outEdges(i);
    edges.forEach(edge => {
      if (c[edge] === "white") {
        s.push(edge);
      }
    });
  }

  console.log(c);
}
