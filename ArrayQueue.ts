export default class ArrayQueue<T> {
  a: Array<T>;
  j: number;
  n: number;

  constructor() {
    this.a = [];
    this.n = 0;
    this.j = 0;
  }

  add(x: T) {
    if (this.n + 1 >= this.a.length) {
      this.resize();
    }
    this.a[(this.j + this.n) % this.a.length] = x;
    this.n++;
    return true;
  }

  remove() {
    const x = this.a[this.j];
    this.j = (this.j + 1) % this.a.length;
    this.n--;
    if (this.a.length >= 3 * this.n) {
      this.resize();
    }

  }
  resize() {
    const b = new Array(Math.max(this.n * 2, 1));
    for (let k = 0; k < this.n; k++) {
      b[k] = this.a[(this.j + k) % this.a.length]
    }
    this.a = b;
    this.j = 0;
  }
}
