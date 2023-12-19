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
var reverseList = function(head) {
    // 그전과 현재에 null을 선언
    let prev = null
    let curr = null
    
    // 현재값에 현재 다음을 넣어주면 
    // 현재 다음에 그전 값을 넣어준다 
    // 그전 값이 현재라고 선언
    while(head){
        curr  =  head.next
        head.next = prev
        prev = head
        head = curr
        
    }
    return prev
};