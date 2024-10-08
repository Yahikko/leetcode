const majorityElement1 = function (nums: number[]) {
  let sol = 0,
    cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (cnt == 0) {
      sol = nums[i];
      cnt = 1;
    } else if (sol == nums[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }

  return sol;
};
