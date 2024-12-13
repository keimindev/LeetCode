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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let node = root;    
    let sum = 0;
    
    backtrack(node);
    
    function backtrack(node){
        node.right && backtrack(node.right);
        node.val += sum;
        sum = node.val;
        node.left && backtrack(node.left);
    }
    return root;
};