const isPalindrome2 = (x: number): boolean => {
  if (x < 0) return false;

  let result = 0;
  let copyX = x;

  while (copyX > 0) {
    result = result * 10 + (copyX % 10);
    copyX = Math.floor(copyX / 10);
  }

  return result == x;
};
