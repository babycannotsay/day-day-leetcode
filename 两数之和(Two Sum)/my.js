/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const result = [];
  nums.some((num, index, arr) => {
    const sub = target - num;
    const matchIndex = arr.slice(index + 1).findIndex(item => item === sub);
    if (matchIndex > -1) {
      result.push(index);
      result.push(index + matchIndex + 1);
      return true;
    }
  });
  return result;
};

/**
 * Time complexity : O(n^2)
 * Space complexity : O(1).
 */
