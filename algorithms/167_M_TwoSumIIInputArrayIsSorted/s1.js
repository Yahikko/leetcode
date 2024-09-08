const twoSum = (numbers, target) => {
  let right = numbers.length - 1;
  let left = 0;

  while (right != left) {
    let sum = numbers[right] + numbers[left];

    if (sum == target) return [++left, ++right];
    else if (sum < target) left++;
    else right--;
  }
};
