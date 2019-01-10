/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = "";
  if (strs.length === 0) return result;

  const minLength = strs.reduce((minLength, str) => {
    return Math.min(minLength, str.length);
  }, strs[0].length);

  for (let i = 1; i <= minLength; i++) {
    if (strs.every(str => str.slice(0, i) === strs[0].slice(0, i))) {
      result = strs[0].slice(0, i);
    }
  }
  return result;
};
