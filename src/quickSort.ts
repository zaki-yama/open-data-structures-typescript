export function quickSort(a: any[]) {
  quickSortRecursive(a, 0, a.length);
}

function quickSortRecursive(a: any[], i: number, n: number) {
  if (n <= 1) return;
  const x = a[i + Math.floor(Math.random() * n)];

  let p = i - 1;
  let j = i;
  let q = i + n;
  // a[i..p] < x, a[p+1..q-1]??x, a[q..i+n-1]>x
  while (j < q) {
    if (a[j] < x) {
      p++;
      swap(a, j, p); // 配列の前方に移す
      j++;
    } else if (a[j] > x) {
      q--;
      swap(a, j, q);
    } else {
      j++;
    }
  }

  // a[i..p] < x, a[p+1..q-1]=x, a[q..i+n-1]>x
  quickSortRecursive(a, i, p - i + 1);
  quickSortRecursive(a, q, n - (q - i));
}

function swap(a: any[], p: number, q: number) {
  const temp = a[p];
  a[p] = a[q];
  a[q] = temp;
}
