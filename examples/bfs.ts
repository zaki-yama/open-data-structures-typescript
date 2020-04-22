import AdjacencyLists from "../src/AdjacencyLists";
import { bfs } from "../src/bfs";

const g = new AdjacencyLists(4);

//    3
//  /
// 1     2
//  \\
//    0
g.addEdge(0, 1);
g.addEdge(1, 0);
// g.addEdge(0, 2);
g.addEdge(1, 3);

bfs(g, 0);
