/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
  const result = [0, 0];

  for (let i = 0; i < Math.max(nums1.length, nums2.length); i++) {
    if (nums2.includes(nums1[i])) {
      result[0] = result[0] + 1;
    }
    if (nums1.includes(nums2[i])) {
      result[1] = result[1] + 1;
    }
  }

  return result;

   // log(N)
};