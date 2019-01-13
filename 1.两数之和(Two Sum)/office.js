/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const memory = {};
  const result = [];
  nums.some((num, index, arr) => {
    const sub = target - num;
    if (memory[sub] !== undefined) {
      result.push(memory[sub], index);
      return true;
    }
    memory[num] = index;
    return false;
  });
  return result;
};

/**
 * Time complexity : O(n)
 * Space complexity : O(n).
 */
