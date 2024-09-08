var rotate = function (nums: number[], k: number) {
  const result: number[] = [];

  for (let i = nums.length - k; i <= nums.length - 1; i++) {
    result.push(nums[i]);
  }

  return result.concat(nums.slice(0, nums.length - k));
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 8, 8], 6));
