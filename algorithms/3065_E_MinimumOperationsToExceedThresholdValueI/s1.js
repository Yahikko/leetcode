var minOperations1 = function (nums, k) {
  let result = 0;
  for (el of nums) el < k && result++;
  return result;
};
