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
var findSecondMinimumValue = function(root) {
    let firstMin = root.val;
    let secondMin = -1;

    function dfs(node) {
        if(!node) return;
        if(node.val > firstMin) {
            if(secondMin == -1 || node.val < secondMin) {
                secondMin = node.val;
            }
        }
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root);

    return secondMin;
};