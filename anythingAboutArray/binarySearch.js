const comparator = (a, b) => a - b;

const binarySearch = (sortedArray, wanted) => {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = start + Math.floor((end - start) / 2);
    if (comparator(sortedArray[middle], wanted) == 0) return middle;

    if (comparator(sortedArray[middle], wanted) < 0) start = middle + 1;
    else end = middle - 1;
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 11, 22, 33, 44, 55, 66, 77, 88], 44));
