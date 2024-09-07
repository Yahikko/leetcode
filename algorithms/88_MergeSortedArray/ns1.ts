const merge = (nums1: number[], m: number, nums2: number[], n: number): number[] => {
  // Initialize i and j to store indices of the last element of 1st and 2nd array respectively...
  let i = m - 1,
    j = n - 1;
  // Initialize a variable k to store the last index of the 1st array...
  let k = m + n - 1;
  // Create a loop until either of i or j becomes zero...
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
    // Either of i or j is not zero, which means some elements are yet to be merged.
    // Being already in a sorted manner, append them to the 1st array in the front.
  }
  // While i does not become zero...
  while (i >= 0) nums1[k--] = nums1[i--];
  // While j does not become zero...
  while (j >= 0) nums1[k--] = nums2[j--];
  // Now 1st array has all the elements in the required sorted order...
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
