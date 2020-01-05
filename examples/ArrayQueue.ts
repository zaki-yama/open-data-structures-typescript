import ArrayQueue from "../src/ArrayQueue";

const a = new ArrayQueue<number>();

a.add(0);
console.log(a);
a.add(1);
console.log(a);
a.add(2);
console.log(a);
a.add(3);
console.log(a);

a.remove();
console.log(a);

a.add(4);
console.log(a);
