var s3 = function (nums) {
  let j = 0;
  let i = 0;

  for (; i < nums.length; i += 1) {
    if (nums[i] !== nums[i + 2]) {
      nums[j] = nums[i];
      j += 1;
    }
  }

  return j;
};

s3([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 6, 6, 6, 6, 7]);
