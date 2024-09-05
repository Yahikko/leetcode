const searchInsert = (nums: number[], target: number): number => {
  let start = 0,
    end = nums.length;

  while (start < end) {
    let middle = start + Math.floor((end - start) / 2);
    if (target == nums[middle]) return middle;
    else if (target > nums[middle]) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }

  return start;
};
