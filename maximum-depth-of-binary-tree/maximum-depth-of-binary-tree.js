/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    //각 노드의 depth는 자식노드로 내려갈 때마다 1씩 증가합니다
    //재귀를 이용하여 root가 null일 경우에 0을 반환해주고
    //root가 null이 아닐 경우에는 1씩 증가시켜 오른쪽 자식의 깊이와 왼쪽 자식의 깊이 중 최대값을 구해줍니다
    
    if (root === null) return 0;
    return 1 + Math.max(maxDepth(root.left) , maxDepth(root.right));
};