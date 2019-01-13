/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  return (
    s ===
    s
      .split("")
      .reverse()
      .join("")
  );
};
