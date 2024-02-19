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
var deleteMiddle = function(head) {
     // 노드가 없거나 노드가 하나뿐인 경우
    if (!head || !head.next) return null;

    // 포인터 초기화
    let slow = head;
    let fast = head;
    let prev = null;
    // prev 중간노드 이전 노드 
    
    // fast가 끝에 도달하거나 fast의 다음이 null일 때까지 반복
    while (fast && fast.next) {
        // slow를 한 번, fast를 두 번씩 이동
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // slow가 중간 노드에 도달했으므로 prev의 다음 노드를 slow의 다음 노드로 설정하여 중간 노드를 건너뛰도록 함
    prev.next = slow.next;

    return head;
};