import { BTree } from "./BTree";

class Node<T> {
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
}
