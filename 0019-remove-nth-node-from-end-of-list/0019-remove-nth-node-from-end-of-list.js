/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 노드의 첫번째 디폴트
    const root = new ListNode(0);
    
    // 그 다음 노드는 그 디폴트의 다음꺼
    root.next = head;
    
    // 앞 , 뒤 로 정의
    let front = root;
    let back = root;
    
    // 앞, 뒤 정의한 두 가지의 포인트 갭을 늘려감
    while (n >= 0) {
        front = front.next;
        n--;
    }
    
  
    while (front) {
        front = front.next;
        back = back.next;
    }

    back.next = back.next.next;
    return root.next;
};