/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let rev = 0;
  while (x !== 0) {
    const pop = x % 10;
    const round = x > 0 ? Math.floor : Math.ceil;
    x = round(x / 10);
    /*
     *  2 ** 31 - 1 === 2147483647
     */
    if (
      rev > (2 ** 31 - 1) / 10 ||
      (rev === Math.floor((2 ** 31 - 1) / 10) && pop > 7)
    ) {
      return 0;
    }
    /*
     *  -2 ** 31 === -2147483648
     */
    if (
      rev < -(2 ** 31) / 10 ||
      (rev === Math.floor(-(2 ** 31) / 10) && pop < -8)
    ) {
      return 0;
    }
    rev = rev * 10 + pop;
  }
  return rev;
};

/**
 * core: We want to repeatedly "pop" the last digit off of x
 * and "push" it to the back of the rev.
 * In the end, rev will be the reverse of the x.
 */

/**
 * Time Complexity: O(log(x)).
 * There are roughly O(log10(x)) digits in x.
 * Space Complexity: O(1).
 */
