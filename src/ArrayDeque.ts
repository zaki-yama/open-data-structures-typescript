export default class ArrayDeque<T> {
  a: T[];
  j: number;
  n: number;

  constructor() {
    this.a = [];
    this.n = 0;
    this.j = 0;
  }

  size() {
    return this.n;
  }

  get(i: number) {
    return this.a[(this.j + i) % this.a.length];
  }

  set(i: number, x: T) {
    const y: T = this.a[(this.j + i) % this.a.length];
    this.a[(this.j + i) % this.a.length] = x;
    return y;
  }

  add(i: number, x: T) {
    if (this.n + 1 >= this.a.length) {
      this.resize();
    }

    if (i < this.n / 2) {
      this.j = this.j === 0 ? this.a.length - 1 : this.j - 1;
      // a[j%a.length], ..., a[(j+i)%a.length] を左に1つずらす
      for (let k = 0; k <= i - 1; k++) {
        this.a[(this.j + k) % this.a.length] = this.a[
          (this.j + k + 1) % this.a.length
        ];
      }
    } else {
      // a[(j+i)%a.length], ..., a[(j+n-1)%a.length] を右に1つずらす
      for (let k = this.n; k > i; k--) {
        this.a[(this.j + k) % this.a.length] = this.a[
          (this.j + k - 1) % this.a.length
        ];
      }
    }
    this.a[(this.j + i) % this.a.length] = x;
    this.n++;
  }

  remove(i: number) {
    const x = this.a[this.j];
    this.j = (this.j + 1) % this.a.length;
    this.n--;
    if (this.a.length >= 3 * this.n) {
      this.resize();
    }
    return x;
  }

  resize() {
    const b = new Array(Math.max(this.n * 2, 1));
    for (let k = 0; k < this.n; k++) {
      b[k] = this.a[(this.j + k) % this.a.length];
    }
    this.a = b;
    this.j = 0;
  }
}
