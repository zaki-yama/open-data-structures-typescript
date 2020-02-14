import DLList from "./DLList";

class ChainedHashTable<T> {
  t: Array<DLList<T>>;
  n: number;

  constructor() {
    this.t = [];
    this.n = 0;
  }

  add(x: T) {
    if (this.find(x) !== null) {
      return false;
    }
    if (this.n + 1 > this.t.length) {
      this.resize();
    }
    this.t[this.hash(x)].addLast(x);
    this.n++;
    return true;
  }

  remove(x: T) {
    const j = this.hash(x);
    for (let i = 0; i < this.t[j].size(); i++) {
      const y = this.t[j].get(i);
      if (x === y) {
        this.t[j].remove(i);
        this.n--;
        return y;
      }
    }
    return null;
  }

  find(x: T) {
    const j = this.hash(x);
    for (let i = 0; i < this.t[j].size(); i++) {
      const y = this.t[j].get(i);
      if (x === y) {
        return y;
      }
    }
    return null;
  }

  hash(x: T) {
    // TODO
    return 1;
  }

  resize() {
    // TODO
  }
}
