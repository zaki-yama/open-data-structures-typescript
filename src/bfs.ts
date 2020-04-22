import { Graph } from "./Graph";
import SLList from "./SLList";

/**
 *  breadth-first search
 */
export function bfs(g: Graph, r: number) {
  const seen = Array.from({ length: g.n }).map(_ => false);
  const q = new SLList<number>();
  q.add(r);
  seen[r] = true;
  while (q.size() > 0) {
    const i = q.remove()!;
    const edges = g.outEdges(i);
    edges.forEach(edge => {
      if (!seen[edge]) {
        q.add(edge);
        seen[edge] = true;
      }
    });
  }
  console.log("seen", seen);
}
