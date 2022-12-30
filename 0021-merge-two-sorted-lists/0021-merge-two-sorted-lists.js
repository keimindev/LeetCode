/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //리스트가 빈 값이면 빈값이 출력, 하나의 숫자라도 있으면 그 값이 출력
    if(!list1 || !list2) return(list1 ? list1 : list2);
    //리스트1의 요소랑 리스트2요소를 비교해서 리스트1의 다음에 나올 요소가
    //그 값과 다시 재귀함수로 비교를 하게 됨 
    if(list1.val < list2.val){
        console.log(list1.val, list2.val, list1.next)
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }else{
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};