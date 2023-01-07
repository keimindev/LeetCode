/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
   if(!nums.length){
        return null;
    }
    // 정렬된 배열의 가운데 값
    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]); 
     
    // left와 right모두 진행한다.
    root.left = sortedArrayToBST(nums.slice(0,mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    
    return root;  
};