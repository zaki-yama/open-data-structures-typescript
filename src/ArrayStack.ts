export default class ArrayStack<T> {
  a: T[];
  n: number;

  constructor() {
    this.a = [];
    this.n = 0;
  }

  size() {
    return this.n;
  }

  get(i: number): T {
    return this.a[i];
  }

  set(i: number, x: T): T {
    const y = this.a[i];
    this.a[i] = x;
    return y;
  }

  add(i: number, x: T) {
    if (this.a.length <= this.n + 1) {
      this.resize();
    }

    for (let j = this.n; j > i; j--) {
      this.a[j] = this.a[j - 1];
    }
    this.a[i] = x;
    this.n++;
  }

  addLast(x: T) {
    this.add(this.n, x);
  }

  remove(i: number): T {
    const x = this.a[i]; // Need clone?
    for (let j = i; j < this.n - 1; j++) {
      this.a[j] = this.a[j + 1];
    }
    this.n--;

    if (this.a.length >= 3 * this.n) {
      this.resize();
    }
    return x;
  }

  resize() {
    const b = new Array<T>(Math.max(2 * this.n, 1));
    for (let i = 0; i < this.n; i++) {
      b[i] = this.a[i];
    }

    this.a = b;
  }
}
