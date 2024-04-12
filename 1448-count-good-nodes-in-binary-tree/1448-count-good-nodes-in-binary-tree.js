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
var goodNodes = function(root) {
    let count = 0;
    
    dfs(root, Number.MIN_SAFE_INTEGER);
    
    return count;
    
    function dfs(node, maxVal) {
        if (node == null) return;
        
        // 3 > 4
        if (node.val >= maxVal) {
            count++;
            // 4 = 4
            maxVal = node.val;
        }
        
        // 3 , 4
        dfs(node.left, maxVal);
        dfs(node.right, maxVal);
    }
};