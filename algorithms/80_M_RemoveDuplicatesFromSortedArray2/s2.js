var s2 = function (nums) {
  const map = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] == undefined || map[nums[i]] < 2) {
      result.push(nums[i]);
    }
    map[nums[i]] > 0 ? map[nums[i]]++ : (map[nums[i]] = 1);
  }

  return result;
};

s1([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 6, 6, 6, 6, 7]);
