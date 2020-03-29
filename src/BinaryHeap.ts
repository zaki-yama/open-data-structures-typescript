function left(i: number) {
  return 2 * i + 1;
}

function right(i: number) {
  return 2 * i + 2;
}

function parent(i: number) {
  return Math.floor((i - 1) / 2);
}

export default class BinaryHeap<T> {
  a: T[];
  n: number;

  constructor() {
    this.a = [];
    this.n = 0;
  }

  add(x: T) {
    if (this.n + 1 > this.a.length) {
      this.resize();
    }

    this.a[this.n++] = x;
    this.bubbleUp(this.n - 1);
    return true;
  }

  bubbleUp(i: number) {
    let p = parent(i);
    while (i > 0 && this.a[i] < this.a[p]) {
      this.swap(i, p);
      i = p;
      p = parent(i);
    }
  }

  remove() {
    const x = this.a[0];
    this.a[0] = this.a[--this.n];
    this.trickleDown(0);
    if (this.a.length > this.n * 3) {
      this.resize();
    }
    return x;
  }

  trickleDown(i: number) {
    while (i >= 0) {
      let j = -1;
      const r = right(i);
      if (r < this.n && this.a[r] < this.a[i]) {
        const l = left(i);
        if (this.a[l] < this.a[r]) {
          j = l;
        } else {
          j = r;
        }
      } else {
        const l = left(i);
        if (l < this.n && this.a[l] < this.a[i]) {
          j = l;
        }
      }
      if (j >= 0) {
        this.swap(i, j);
      }
      i = j;
    }
  }

  resize() {
    const b = new Array<T>(Math.max(2 * this.n, 1));
    for (let i = 0; i < this.n; i++) {
      b[i] = this.a[i];
    }

    this.a = b;
  }

  swap(p: number, q: number) {
    const temp = this.a[p];
    this.a[p] = this.a[q];
    this.a[q] = temp;
  }
}
