/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const parentheses = {
    "(": 1,
    "{": 2,
    "[": 3,
    ")": -1,
    "}": -2,
    "]": -3
  };
  Array.prototype.some.call(s, char => {
    if (parentheses[stack[stack.length - 1]] + parentheses[char] === 0) {
      stack.pop();
      return false;
    }
    if (parentheses[stack[stack.length - 1]] < 0) {
      return true;
    }
    stack.push(char);
    return false;
  });
  return stack.length === 0;
};
