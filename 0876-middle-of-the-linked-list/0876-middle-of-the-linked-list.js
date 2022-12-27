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
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    //head를 복제
    
    //복제한 head를 loop 돌리기 
    while(fast) {
        if (!fast.next) break;
    
        fast = fast.next.next;
        slow = slow.next;
        console.log(slow)
    }
    
    return slow;
};