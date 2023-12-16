/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // dummy list 생성
    let start = new ListNode(0)
    let end = new ListNode(0)
    
    
    let p1=start
    let p2=end
    let curr = head
    
    while(curr){
        // x와 비교해서 curr value가 작으면 첫 시작 노드의 다음이 curr로 
        // p1에 curr
        if(curr.val < x){
            p1.next = curr
            p1 = p1.next
        }else{
            // 작으면 p2에
            p2.next = curr
            p2 = p2.next
        }
        
        // 조건문을 다 타고 curr는 그 다음꺼로 변경
        curr = curr.next
    }
    
    // p1과 p2 연결 (p2가 아닌이유는 리스트가 처음시작되었을대가 필요함 그래서 end)
    p1.next = end.next
    p2.next = null   // p2 순환방지
    
    return start.next
};