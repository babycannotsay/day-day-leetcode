/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.lastIndexOf(nums[i]) !== i) {
      nums.splice(i, 1);
      i = i - 1;
    }
  }
  return nums.length;
};
