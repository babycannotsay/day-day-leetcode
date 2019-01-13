/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let rev = 0;
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  while (x > rev) {
    const pop = x % 10;
    x = Math.floor(x / 10);
    rev = rev * 10 + pop;
  }
  return rev === x || x === Math.floor(rev / 10);
};

/**
 * core: to avoid the overflow issue of the reverted number,
 * what if we only revert half of the int number?
 * After all, the reverse of the last half of the palindrome should be the same as the first half of the number,
 * if the number is a palindrome.
 *
 * how: Since we divided the number by 10,
 * and multiplied the reversed number by 10,
 * when the original number is less than the reversed number,
 * it means we've processed half of the number digits.
 */

/**
 * Time complexity : O(log10(n)).
 * We divided the input by 10 for every iteration,
 * so the time complexity is O(log10(n))
 * Space complexity : O(1).
 */
