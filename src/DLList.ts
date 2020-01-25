class DLListNode<T> {
  next!: DLListNode<T>;
  prev!: DLListNode<T>;
  x?: T

  constructor(x?: T) {
    this.x = x;
  }
}

export default class DLList<T> {
  dummy: DLListNode<T>;
  n: number;

  constructor() {
    const dummy = new DLListNode<T>();
    this.dummy = dummy;
    this.dummy.next = this.dummy;
    this.dummy.prev = this.dummy;
    this.n = 0;
  }

  getNode(i: number): DLListNode<T> {
    let p;
    if (i < this.n / 2) {
      p = this.dummy.next;
      for (let j = 0; j < i; j++) {
        p = p.next;
      }
    } else {
      p = this.dummy;
      for (let j = this.n; j > i; j--) {
        p = p.prev;
      }
    }
    return p;
  }

  get(i: number) {
    return this.getNode(i).x;
  }

  set(i: number, x: T) {
    const u = this.getNode(i);
    const y = u.x;
    u.x = x;
    return y;
  }

  addBefore(w: DLListNode<T>, x: T) {
    const u = new DLListNode<T>();
    u.x = x;
    u.prev = w.prev;
    u.next = w;

    u.prev.next = u;
    u.next.prev = u;

    this.n++;
    return u;
  }

  add(i: number, x: T) {
    this.addBefore(this.getNode(i), x);
    this.log();
  }

  // means `push` in Stack
  addFirst(x: T) {
    this.addBefore(this.dummy.next, x);
    this.log();
  }

  // means `pop` in Stack
  removeFirst() {
    this.removeNode(this.dummy.next);
    this.log();
  }

  // for Queue
  addLast(x: T) {
    this.addBefore(this.dummy, x);
    this.log();
  }

  removeNode(w: DLListNode<T>) {
    w.prev.next = w.next;
    w.next.prev = w.prev;

    this.n--;
  }

  remove(i: number) {
    const w = this.getNode(i);
    const x = w.x;

    this.removeNode(w);
    this.log();
    return x;
  }

  log() {
    const data = [];
    let current = this.dummy.next;
    for (let i = 0; i < this.n; i++) {
      data.push(current.x);
      current = current.next;
    }
    console.log(data.join(', '));
  }
}
