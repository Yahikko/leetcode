var myPow = function (num, k) {
  const powHelper = (num, k) => {
    if (k === 0) {
      return 1;
    }

    if (k < 0) {
      num = 1 / num;
      k = -k;
    }

    let x = powHelper(num, Math.floor(k / 2));

    if (k % 2 === 0) {
      return x * x;
    } else {
      return x * x * num;
    }
  };

  return powHelper(num, k).toFixed(5);
};
