/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const parsedStr = parseInt(str);
  if (isNaN(parsedStr)) {
    return 0;
  } else if (parsedStr > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  } else if (parsedStr < 2 ** 31 * -1) {
    return 2 ** 31 * -1;
  }
  return parsedStr;
};
