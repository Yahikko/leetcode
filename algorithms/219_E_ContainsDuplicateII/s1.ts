const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (i - map[nums[i]] <= k) {
      return true;
    }
    map[nums[i]] = i;
  }

  return false;
};
