function lengthOfLastWord1(s: string): number {
  let wordLenght = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      wordLenght = 0;
    } else {
        wordLenght++;
    }
  }

  return wordLenght;
}
