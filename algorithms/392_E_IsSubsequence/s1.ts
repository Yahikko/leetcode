function isSubsequence1(s: string, t: string): boolean {
  if (s.length > t.length) return false;

  let index = 0;
  let flag = false;
  for (let i = 0; i <= t.length; i++) {
    if (s[index] !== t[i]) {
      flag = false;
      continue;
    }

    flag = true;
    index++;

    if (index > s.length && flag == true) {
      return true;
    }
  }

  return false;
}
