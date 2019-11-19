export default class ArrayStack<T> {
  a: Array<T>
  n: number;
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
    // TODO: If `a` is full, resize first

    for (let j = this.n; j > i; j--) {
      this.a[j] = this.a[j - 1];
    }
    this.a[i] = x;
    this.n++;
  }

  remove(i: number): T {
    const x = this.a[i]; // Need clone?
    for (let j = i; j < this.n - 1; j++) {
      this.a[j] = this.a[j + 1];
    }
    this.n--;

    // TODO: If the length of `a` is much larger than `n`, resize `a`.

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
