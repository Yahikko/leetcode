const canJump = (nums) => {
  let jump = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= jump) jump = i;
  }

  return jump == 0;
};
