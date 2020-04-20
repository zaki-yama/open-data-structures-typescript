import AdjacencyMatrix from "../src/AdjacencyMatrix";

const a = new AdjacencyMatrix(4);

//    3
//  /
// 1     2
//  \\  /
//    0
a.addEdge(0, 1);
a.addEdge(1, 0);
a.addEdge(0, 2);
a.addEdge(1, 3);
console.log(a.hasEdge(0, 0));
console.log(a.hasEdge(0, 1));
console.log(a.hasEdge(0, 2));
console.log(a.hasEdge(1, 0));
console.log(a.hasEdge(1, 2));
console.log(a.hasEdge(1, 3));

console.log(a.outEdges(0)); // 1, 2
console.log(a.inEdges(1)); // 0

a.removeEdge(0, 2);
console.log(a.hasEdge(0, 2));
