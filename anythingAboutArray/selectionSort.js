const comparator = (a, b) => a - b;

const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[min], arr[j]) > 0) {
        min = j;
      }
    }

    if (min !== i) swap(arr, i, min);
  }

  return arr;
}

console.log(selectionSort([3, 4, 1, 2, 7, 45, 3, 1, 7, 9, 0, 2, 4, 15, 21]));
