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
  let dummyHead = new ListNode(0);
  let temp = dummyHead;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    /**
     * l1 = [1,2], l2 = [3]
     */
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    const sum = x + y + carry;
    carry = Math.floor(sum / 10);
    temp.next = new ListNode(sum % 10);
    temp = temp.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  /**
   * l1 = [5], l2 = [5]
   */
  if (carry > 0) {
    temp.next = new ListNode(carry);
  }
  return dummyHead.next;
};

/**
 * Time complexity : O(\max(m, n))O(max(m,n)).
 * Assume that mm and nn represents the length of l1l1 and l2l2 respectively,
 * the algorithm above iterates at most \max(m, n)max(m,n) times.
 *
 * Space complexity : O(\max(m, n))O(max(m,n)).
 * The length of the new list is at most \max(m,n) + 1max(m,n)+1.
 */
