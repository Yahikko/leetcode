const comparator = (a, b) => a - b;

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);

  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return mergeSortedArrays(mergeSort(left), mergeSort(right));
};

const mergeSortedArrays = (arr1, arr2) => {
  let result = [];

  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    let min = null;

    if (comparator(arr1[index1], arr2[index2]) <= 0) {
      min = arr1[index1];
      index1++;
    } else {
      min = arr2[index2];
      index2++;
    }

    result.push(min);
  }

  return [...result, ...arr1.slice(index1), ...arr2.slice(index2)];
};

console.log(mergeSort([3, 4, 1, 2, 7, 45, 3, 1, 7, 9, 0, 2, 4, 15, 21]));
