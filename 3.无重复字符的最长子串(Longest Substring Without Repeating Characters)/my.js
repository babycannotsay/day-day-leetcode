/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const strs = [];
  let c = "";
  const length = s.length;

  for (let i = 0; i < length; i++) {
    let index = c.indexOf(s[i]);
    if (index === -1) {
      c += s[i];
      continue;
    }
    strs.push(c.length);
    c = c.slice(index + 1) + s[i];
  }
  strs.push(c.length);
  return Math.max(...strs);
};
