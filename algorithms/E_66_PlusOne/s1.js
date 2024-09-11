const plusOne = (nums) => {
  return (BigInt(nums.join('')) + BigInt(1)).toString().split('');
};
