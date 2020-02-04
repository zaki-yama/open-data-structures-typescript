import ArrayDeque from "./ArrayDeque";

class BDeque<T> extends ArrayDeque<T> {
  constructor(b: number) {
    super();

    const z = new Array(b + 1);
    this.a = z;
  }

  size() {
    return this.n;
  }

  add(i: number, x: T) {
    super.add(i, x);
  }

  canAdd(x: T) {
    super.add(this.size(), x);
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  resize() {}
}

class Node<T> {
  d: BDeque<T>;
  next!: Node<T>;
  prev!: Node<T>;

  constructor(b: number) {
    this.d = new BDeque(b);
  }
}

class Location<T> {
  u: Node<T>;
  j: number;

  constructor(u: Node<T>, j: number) {
    this.u = u;
    this.j = j;
  }
}

export default class SEList<T> {
  dummy: Node<T>;
  n: number;

  getLocation(i: number, ell: Location<T>) {
    if (i < this.n / 2) {
      let u: Node<T> = this.dummy.next;
      let k = i;
      while (k >= u.d.size()) {
        k -= u.d.size();
        u = u.next;
      }
      ell.u = u;
      ell.j = k;
    } else {
      // TODO
    }
  }
}
