const mergeSortedArray = (nums1: number[], m: number, nums2: number[], n: number): number[] => {
  const newArray: number[] = [];

  let i = 0;
  let j = 0;
  let counter = 0;

  for (counter; counter < m + n; counter++) {
    if (nums1[i] <= nums2[j]) {
      newArray[counter] = nums1[i++];
    } else {
      newArray[counter] = nums2[j++];
    }
  }

  return newArray;
};

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
