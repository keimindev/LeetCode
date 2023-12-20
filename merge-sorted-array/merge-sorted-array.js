/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // nums1을 대신하는게 아니라 nums1에 그대로 진행해야한다. 
    // nums1에서 필요없는 요소들을 제거한 후에 nums2를 더한다. 
    // nums1에 요소 제거된 이후에 nums2가 더해진다.
    nums1.splice(m,n, ...nums2)
    // 다시 정렬한다. 
    nums1.sort((a,b) => a-b)
    return nums1
};