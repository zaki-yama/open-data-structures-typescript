import BinaryHeap from "./BinaryHeap";

export function heapSort(a: any[]) {
  const heap = new BinaryHeap<any>();

  a.forEach(item => heap.add(item));
  for (let i = 0; i < a.length; i++) {
    a[i] = heap.remove();
  }
}
