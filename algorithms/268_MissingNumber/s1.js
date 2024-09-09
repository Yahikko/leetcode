var missingNumber1 = function (nums) {
  const inSum = nums.reduce((acc, el) => (acc += el), 0);
  let outSum = 0;

  for (let i = 0; i <= nums.length; i++) {
    outSum += i;
  }

  return outSum - inSum;
};
