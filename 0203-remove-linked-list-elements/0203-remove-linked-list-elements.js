/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  // 연결리스트가 널이면 리턴, 타켓이 0 이면 역시나 리턴
  if (!head || val === 0) return head;
  
  // 타켓이랑 노드랑 같으면 노드를 그담 노트로 반환
  while(head && head.val === val) {
    head = head.next;
  }
  
  let node = head;
  
    
  while(node) {
    //  그 다음 요소가 타켓이랑 같으면 스킵하고 다음 노드로 
    while(node.next && node.next.val === val) node.next = node.next.next;
    node = node.next;
  }
  
  return head;
   
    
    // 아...진짜 모르겠다... 연결리스트... 
};