var s1 = function (nums: number[]): number {
  const result: number[] = [];

  for (let i = 0, j = 0; i < nums.length; i++) {
    if (result[j - 2] == nums[i]) {
      continue;
    }

    result.push(nums[i]);
    j++;
  }

  return result.length;
};

s1([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 6, 6, 6, 6, 7]);
