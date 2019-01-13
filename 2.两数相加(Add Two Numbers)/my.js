/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = {};
  let temp = result;
  do {
    const tempVal = temp.val === undefined ? 0 : temp.val;
    const sum = l1.val + l2.val + tempVal;
    temp.val = sum % 10;
    temp.next =
      l1.next == null && l2.next == null && sum < 10
        ? null
        : new ListNode(Math.floor(sum / 10));
    if (l1.next) {
      l1 = l1.next;
    } else {
      l1 = { val: 0 };
    }
    if (l2.next) {
      l2 = l2.next;
    } else {
      l2 = { val: 0 };
    }
    temp = temp.next;
  } while (l1.next !== undefined || l2.next !== undefined);
  return result;
};
