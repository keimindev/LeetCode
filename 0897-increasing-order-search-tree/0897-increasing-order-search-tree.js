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
var increasingBST = function(root) {
    // 새로운 노드 만들고 
    // 층별 순회하면서 비교하면서 넣어주면 되지 않나? 라고 생각함. 
    // 위에 처럼 생각하고 코드는 단 한 줄도 적지 못함.
   
    
    
    // arr 만들고 root 를 거기에 넣어주기 위해
	const arr = []

    // 넣어주는 작업 
    // 중위 순회를 해야함
	function getVals(node){
		if(!node) return
		getVals(node.left)
		arr.push(node.val)
		getVals(node.right)
        console.log(node.left, node.val, node.right, arr)
	}

	getVals(root)

    // 새로운 노드 생성
	const tree = new TreeNode()
	let curr = tree
    
    // arr를 돌면서 오른쪽에만 차근차근 넣기
	for(let i=0; i< arr.length; i++){
		curr.right = new TreeNode(arr[i])
		curr = curr.right
	}

	return tree.right
};