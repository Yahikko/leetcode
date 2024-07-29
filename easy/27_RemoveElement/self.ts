function removeElement(nums: number[], val: number) {
  let count: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }

  console.log(nums);

  return count;
}

removeElement([3, 2, 2, 3], 3);
