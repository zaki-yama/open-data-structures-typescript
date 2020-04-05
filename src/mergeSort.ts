export function mergeSort(a: any[]) {
  if (a.length <= 1) {
    return;
  }

  const a0 = a.slice(0, Math.floor(a.length / 2));
  const a1 = a.slice(Math.floor(a.length / 2));

  mergeSort(a0);
  mergeSort(a1);
  merge(a0, a1, a);
}

function merge(a0: any[], a1: any[], a: any[]) {
  let i0 = 0;
  let i1 = 0;

  for (let i = 0; i < a.length; i++) {
    if (i0 === a0.length) {
      a[i] = a1[i1++];
    } else if (i1 === a1.length) {
      a[i] = a0[i0++];
    } else if (a0[i0] > a1[i1]) {
      a[i] = a0[i0++];
    } else {
      a[i] = a1[i1++];
    }
  }
}
