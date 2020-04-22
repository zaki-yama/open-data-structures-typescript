import { Graph } from "./Graph";

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
