const canConstruct = (ransomNote: string, magazine: string): boolean => {
  for (const char of magazine) {
    console.log(ransomNote);
    ransomNote = ransomNote.replace(char, '');
  }

  if (!ransomNote) return true;
  else return false;
};
