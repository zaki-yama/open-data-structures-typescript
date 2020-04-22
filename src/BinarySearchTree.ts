import BinaryTree from "./BinaryTree";

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

  splice(u: Node<T>) {
    let s, p;
    if (u.left !== null) {
      s = u.left;
    } else {
      s = u.right;
    }

    if (u === this.r) {
      this.r = s;
      p = null;
    } else {
      p = u.parent!;
      if (p.left === u) {
        p.left = s;
      } else {
        p.right = s;
      }
    }
    if (s !== null) {
      s.parent = p;
    }
    this.n--;
  }

  removeNode(u: Node<T>) {
    if (u.left === null || u.right === null) {
      this.splice(u);
    } else {
      let w = u.right;
      while (w.left !== null) {
        w = w.left;
      }
      u.x = w.x;
      this.splice(w);
    }
  }

  remove(x: T) {
    const u = this.findLast(x);
    if (u !== null && u.x === x) {
      this.removeNode(u);
    }
  }
}
