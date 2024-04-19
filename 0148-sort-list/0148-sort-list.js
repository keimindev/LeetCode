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
var sortList = function(head) {
    let nums = []

    while(head){
        nums.push(head.val)
        head = head.next
    }
    
    nums.sort((a,b)=>a-b)

    let dummy = new ListNode()
    let cur = dummy

    for(let num of nums){
        cur.next = new ListNode(num)
        cur = cur.next
    }
    return dummy.next
};