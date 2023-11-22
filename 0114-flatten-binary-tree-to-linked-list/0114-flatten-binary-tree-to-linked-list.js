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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
   // 오른쪽에 붙는 노드를 저장할 포인터. 지금까지 모은 오른쪽노드들
   let head = null;  
    
   const recursion=(root)=>{
       // 오른쪽 노드 
        if(root.right) recursion(root.right);
       
       // 왼쪽 노드
        if(root.left) recursion(root.left);
       
       // 돌면서 왼쪽을 비우고
        root.left = null;  
       
       // 오른편엔 지금까지 모은 노드를 붙여준다.
        root.right = head; 
       
      // root를 갱신했으니 head도 갱신
        head = root; 
        
    }
    if(root) recursion(root)
};