const comparator = (a, b) => a - b;

function quickSort(arr, start, end) {
  if (start === undefined) start = 0;
  if (end === undefined) end = arr.length - 1;

  if (start >= end) return;

  let pivot = partition(arr, start, end);

  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
}

function partition(arr, start, end) {
  let pivotValue = arr[end];

  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (comparator(arr[i], pivotValue) < 0) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);

  return pivotIndex;
}
