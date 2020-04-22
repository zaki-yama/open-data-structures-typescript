import ArrayDeque from "./ArrayDeque";

class Node {
  left: Node | null;
  right: Node | null;
  parent: Node | null;

  constructor() {
    this.left = this.right = this.parent = null;
  }
}

export default class BinaryTree {
  r: Node | null = null; // root

  depth(u: Node) {
    let d = 0;
    let w = u;
    while (w.parent) {
      w = w.parent;
      d++;
    }
    return d;
  }

  size(u: Node | null): number {
    if (u === null) return 0;
    return 1 + this.size(u.left) + this.size(u.right);
  }

  height(u: Node | null): number {
    if (u === null) return 1;
    return 1 + Math.max(this.height(u.left), this.height(u.right));
  }

  // This is the expression of how size() and height() traverses with recursive call.
  traverse(u: Node | null) {
    if (u === null) return;
    this.traverse(u.left);
    this.traverse(u.right);
  }

  // Traverse without recirsive call.
  traverse2() {
    let u = this.r;
    let prev = null;
    let next = null;

    while (u !== null) {
      if (prev === u.parent) {
        if (u.left !== null) {
          next = u.left;
        } else if (u.right !== null) {
          next = u.right;
        } else {
          next = u.parent;
        }
      } else if (prev === u.left) {
        if (u.right !== null) {
          next = u.right;
        }
      } else {
        next = u.parent;
      }
      prev = u;
      u = next;
    }
  }

  size2() {
    let u = this.r;
    let prev = null;
    let next = null;
    let n = 0;

    while (u !== null) {
      if (prev === u.parent) {
        n++;
        if (u.left !== null) {
          next = u.left;
        } else if (u.right !== null) {
          next = u.right;
        } else {
          next = u.parent;
        }
      } else if (prev === u.left) {
        if (u.right !== null) {
          next = u.right;
        }
      } else {
        next = u.parent;
      }
      prev = u;
      u = next;
    }
    return n;
  }

  // breadth-first traverse
  bfTraverse() {
    const q = new ArrayDeque<Node>();
    if (this.r !== null) q.add(q.size(), this.r);

    while (q.size() > 0) {
      const u = q.remove(q.size() - 1);
      if (u.left !== null) q.add(q.size(), u.left);
      if (u.right !== null) q.add(q.size(), u.right);
    }
  }
}
