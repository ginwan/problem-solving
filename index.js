/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Attach the remaining part of list1 or list2
  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }

  // Return the merged list, which starts from dummy.next
  return dummy.next;
};

console.log(mergeTwoLists((list1 = [1, 2, 4])), (list2 = [1, 3, 4]));
