var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  const counts = {};

  for (i of s) counts[i] = (counts[i] || 0) + 1;

  for (i of t) {
    if (!counts[i]) return false;
    counts[i]--;
  }

  return true;
};

isAnagram('anagram', 'nagaram');
