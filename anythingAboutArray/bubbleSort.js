const comparator = (a, b) => a - b;

const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
};

console.log(mergeSort([3, 4, 1, 2, 7, 45, 3, 1, 7, 9, 0, 2, 4, 15, 21]));
