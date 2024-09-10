var minOperations2 = function (nums, k) {
  return nums.reduce((acc, el) => el < k && ++acc, 0);
};
