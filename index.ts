import ArrayStack from './ArrayStack';
import ArrayQueue from './ArrayQueue';

const a = new ArrayStack<number>();

for (let i = 0; i < 100; i++) {
  a.add(0, i);
}

// console.log(a);

for (let i = 0; i < 100; i++) {
  a.remove(0);
}


const b = new ArrayQueue<number>();

b.add(0);
console.log(b);
b.add(1);
console.log(b);
b.add(2);
console.log(b);
b.add(3);
console.log(b);

b.remove();
console.log(b);

b.add(4);
console.log(b);
