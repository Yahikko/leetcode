const isPalindrome = (x: number): boolean => {
  if (x < 0) return false

  let result = '';

  for (let i = String(x).length - 1; i >= 0; i--) {
    result += String(x)[i];
  }

  return String(x) == result;
};
