/**
 * solve it without converting the integer to a string
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let rev = 0;
  let dealtX = x;
  if (x < 0) {
    return false;
  }
  while (dealtX !== 0) {
    const pop = dealtX % 10;
    dealtX = Math.floor(dealtX / 10);
    rev = rev * 10 + pop;
  }
  return rev === x;
};

/**
 * learn from 整数反转(Reverse Integer)
 */
