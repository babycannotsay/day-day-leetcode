/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let length = nums.length;
  while (length--) {
    if (nums[length] === val) {
      nums.splice(length, 1);
    }
  }
  return nums.length;
};
