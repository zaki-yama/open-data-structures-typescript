import ArrayStack from '../src/ArrayStack';

const a = new ArrayStack<number>();

for (let i = 0; i < 100; i++) {
  a.add(0, i);
}

console.log(a);

for (let i = 0; i < 100; i++) {
  a.remove(0);
}
