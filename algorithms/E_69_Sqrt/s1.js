var mySqrt1 = function (x) {
  for (let i = 0; i < x; i++) {
    let el = i + 1;
    if (i * i <= x && el * el > x) return i;
  }

  return x < 1 ? 0 : 1;
};
