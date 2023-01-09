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
var sumOfLeftLeaves = function(root) {
    //왼쪽에 위치하고 자식노드가 없어야한다
    let sum = 0
    
    const dfs = (node, pos) => {
        if (!node) return;
        //왼쪽에 있고 자식들이 없다 그러면 더하라!!
        if (pos == 'left' && !node.left && !node.right) {
            sum += node.val
            return;
        }
        //재귀로 그아래에도 다시 한번 탐색
        dfs(node.left, 'left')
        dfs(node.right, 'right')
    }
    dfs(root, '')
    return sum

};