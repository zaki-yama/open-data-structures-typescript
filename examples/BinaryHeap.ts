import BinaryHeap from "../src/BinaryHeap";

const heap = new BinaryHeap();

heap.add(4);
heap.add(10);
heap.add(18);

console.log(heap);

heap.add(8);
heap.add(36);
heap.add(40);
heap.add(2);

console.log(heap);

heap.remove();
console.log(heap);
heap.remove();
console.log(heap);
heap.remove();
console.log(heap);
heap.remove();
console.log(heap);
heap.remove();
console.log(heap);
/*
4
10 18
8

4
8     18
10 36


4
8     18
10 36 40

4
8     18
10 36 40 2


4
8     2
10 36 40 18
*/
