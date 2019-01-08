/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const reversedNum = parseInt(
    x
      .toString()
      .split("")
      .reverse()
      .join("")
  );
  if (x <= 0) {
    if (reversedNum > 2 ** 31) {
      return 0;
    }
    return -1 * reversedNum;
  } else {
    if (reversedNum > 2 ** 31 - 1) {
      return 0;
    }
    return reversedNum;
  }
};
