class SLListNode<T> {
  next: SLListNode<T> | null;
  x: T;

  constructor(x: T) {
    this.x = x;
    this.next = null;
  }
}

export default class SLList<T> {
  head: SLListNode<T> | null;
  tail: SLListNode<T> | null;
  n: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.n = 0;
  }

  size() {
    return this.n;
  }

  // Stack
  push(x: T) {
    const u = new SLListNode(x);
    u.next = this.head;
    this.head = u;
    if (this.n === 0) {
      this.tail = u;
    }
    this.n++;
    this.log();
    return x;
  }

  // Stack
  pop() {
    if (this.n === 0) return null;
    const u = this.head!;
    const x = u.x;
    this.head = u.next;
    this.n--;
    if (this.n === 0) {
      this.tail = null;
    }
    this.log();
    return x;
  }

  // Queue
  add(x: T) {
    const u = new SLListNode(x);
    if (this.n === 0) {
      this.head = u;
    } else {
      this.tail!.next = u;
    }
    this.tail = u;
    this.n++;
    return true;
  }

  // Queue (same as `pop()` of Stack)
  remove() {
    return this.pop();
  }

  log() {
    const data = [];
    let current = this.head;
    while (current) {
      data.push(current.x);
      current = current.next;
    }
    console.log(data.join(", "));
  }
}
