const maxSequence = (arr: number[]): number => {
  let ans = 0,
    min = 0,
    sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }

  return ans;
};
