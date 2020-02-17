import { BTree } from "./BTree";

export class Node<T> {
  x: T;
  left: Node<T> | null;
  right: Node<T> | null;
  parent: Node<T> | null;

  constructor(x: T) {
    this.x = x;
    this.left = this.right = this.parent = null;
  }
}

export class BinarySearchTree<T> {
  r: Node<T> | null = null; // root
  n: number = 0;

  findEQ(x: T) {
    let w = this.r;
    while (w !== null) {
      if (x < w.x) {
        w = w.left;
      } else if (x > w.x) {
        w = w.right;
      } else {
        return w.x;
      }
    }
    return null;
  }

  find(x: T) {
    let w = this.r;
    let z = null;
    while (w !== null) {
      if (x < w.x) {
        z = w;
        w = w.left;
      } else if (x > w.x) {
        w = w.right;
      } else {
        return w.x;
      }
    }
    return z === null ? null : z.x;
  }

  findLast(x: T) {
    let w = this.r;
    let prev = null;
    while (w !== null) {
      prev = w;
      if (x < w.x) {
        w = w.left;
      } else if (x > w.x) {
        w = w.right;
      } else {
        return w;
      }
    }
    return prev;
  }

  add(x: T) {
    const p = this.findLast(x);
    const u = new Node(x);
    return this.addChild(p, u);
  }

  addChild(p: Node<T> | null, u: Node<T>) {
    if (p === null) {
      this.r = u;
    } else {
      if (u.x < p.x) {
        p.left = u;
      } else if (u.x > p.x) {
        p.right = u;
      } else {
        return false;
      }
      u.parent = p;
    }
    this.n++;
    return true;
  }
}
