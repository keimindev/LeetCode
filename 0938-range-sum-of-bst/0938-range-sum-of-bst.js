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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if(!root) return 0;
    let sum = root.val >= low && root.val <= high ? root.val : 0;
    if(root.val >= low) sum += rangeSumBST(root.left, low, high)
    //root.left, right 로 넘어가는 게 그 다음 노드줄 
    if(root.val <= high) sum += rangeSumBST(root.right, low, high)

    return sum
    
};