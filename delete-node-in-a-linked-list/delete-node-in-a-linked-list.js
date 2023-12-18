/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // 주어진 노드는 지워질 노드 
    // 주어진 노드를 노드의 다음 노드로 선언
    node.val = node.next.val;
    
    // 주어진 노드의 다음을 노드의 다음다음으로 선언 
    node.next = node.next.next;
};