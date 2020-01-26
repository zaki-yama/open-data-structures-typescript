import ArrayDeque from "../src/ArrayDeque";

const a = new ArrayDeque<string>();

a.add(0, "a");
console.log(a);
a.add(1, "b");
console.log(a);
a.add(2, "c");
console.log(a);
a.add(3, "d");
console.log(a);
a.add(4, "e");
console.log(a);
a.add(5, "f");
console.log(a);

a.remove(2);
console.log(a);

a.add(3, "x");
console.log(a);
