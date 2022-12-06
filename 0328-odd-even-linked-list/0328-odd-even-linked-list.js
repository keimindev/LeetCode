/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  // Handle base cases
    if(!head || !head.next || !head.next.next) {
        return head
    }

    // Set two pointers
    let cur = head
    let next = head.next

    // Set the odd.next to point to the next even node
    // Move each pointer up one node on each iteration
    while(next && next.next) {
        const temp = next.next
        const temp2 = cur.next

        cur.next = temp
        next.next = temp.next
        temp.next = temp2

        cur = cur.next
        next = next.next
    }

    return head
};